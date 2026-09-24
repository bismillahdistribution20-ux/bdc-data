/* BDC PRO service worker — offline-first.
   - The app shell is cached at install, so the app opens with no internet at all.
   - Opening online: the newest index.html is fetched, but if the network is slow or dead
     (weak signal, "connected but no internet") we fall back to the saved copy after NAV_TIMEOUT ms
     instead of hanging on a white screen.
   - Google Fonts (Nunito / Hind Siliguri) are saved the first time they load, so Bangla text
     looks the same offline.
   - Cloud sync calls (GitHub / Supabase) are cross-origin and are never touched here: they go straight
     to the network, and the app itself retries them when the connection comes back. */
const CACHE = 'bdcpro-v7';
const NAV_TIMEOUT = 3500;
const CORE = ['./index.html'];            // must be cached, or the install fails and is retried next visit
const EXTRA = ['./', './manifest.json', './bdc.ico', './icons/icon-192.png', './icons/icon-512.png',
  './icons/logo.png', './icons/apple-touch-icon.png', './icons/favicon.png']; // best effort: one missing file must not break offline mode
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // 'reload' bypasses the browser HTTP cache so we never pre-cache a stale copy
    await Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' }))));
    await Promise.all(EXTRA.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// one cache key per page, ignoring ?query and #hash (so /index.html?x=1 still opens offline)
function pageKey(url) {
  const u = new URL(url);
  u.search = ''; u.hash = '';
  return u.href;
}
const INDEX_URL = new URL('./index.html', self.location).href;

async function fromCache(req) {
  const c = await caches.open(CACHE);
  return (await c.match(pageKey(req.url))) || (await c.match(INDEX_URL)) || null;
}

async function handleNavigate(e) {
  const req = e.request;
  const key = pageKey(req.url);
  const net = fetch(req).then(res => {
    if (res && res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then(c => {
        c.put(key, copy.clone());
        if (key !== INDEX_URL) c.put(INDEX_URL, copy);
      }).catch(() => {});
    }
    return res;
  });
  e.waitUntil(net.catch(() => {})); // let the refresh finish in the background even if we answered from cache

  const timeout = new Promise(r => setTimeout(() => r(null), NAV_TIMEOUT));
  let first = null;
  try { first = await Promise.race([net, timeout]); } catch (err) { first = null; }

  // good network answer (or a redirect the browser must follow) -> use it
  if (first && (first.ok || first.type === 'opaqueredirect')) return first;

  // network failed / too slow / returned an error page -> use the saved copy
  const cached = await fromCache(req);
  if (cached) return cached;

  // nothing saved yet (very first visit): wait for the network however long it takes
  try { return await net; } catch (err) { return Response.error(); }
}

async function cacheFirst(req) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res && res.ok) c.put(req, res.clone());
  return res;
}

// stale-while-revalidate for fonts: instant from cache, refreshed quietly when online
async function fontStrategy(e) {
  const req = e.request;
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  const refresh = fetch(req).then(res => {
    if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone());
    return res;
  });
  if (hit) { refresh.catch(() => {}); e.waitUntil(refresh.catch(() => {})); return hit; }
  return refresh;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return; // POST (Supabase login/sync) always goes straight to the network
  const url = new URL(req.url);

  if (FONT_HOSTS.indexOf(url.hostname) >= 0) { e.respondWith(fontStrategy(e)); return; }
  if (url.origin !== self.location.origin) return; // GitHub / Supabase / anything else: network only

  if (req.mode === 'navigate' || req.destination === 'document') { e.respondWith(handleNavigate(e)); return; }
  e.respondWith(cacheFirst(req));
});
