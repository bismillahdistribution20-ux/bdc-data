BDC PRO v1.7.0 — Bismillah Distribution Center
===============================================

বাংলা
-----
নতুন: বড় স্টোরেজ ও ব্যাকআপ ফাইল
- ডেটা এখন ব্রাউজারের IndexedDB-তে থাকে (আগে localStorage, সীমা প্রায় ৫MB)। পুরোনো ডেটা প্রথমবার খুললে নিজে থেকে সরে আসে, কিছু হারায় না।
- সেটিংস -> ব্যাকআপ: "ব্যাকআপ ফাইল ডাউনলোড" ও "ফাইল থেকে রিস্টোর"। ডেটা বড় হলে শুধু ফাইল ব্যাকআপ দেখায়।
- ৩০ দিনের বেশি ফাইল ব্যাকআপ না নিলে অ্যাপ মনে করিয়ে দেয়। ফাইলটি Google Drive বা পেনড্রাইভে রাখুন — ১০ বছরের রেকর্ডের আসল নিরাপত্তা এটাই।
- ক্লাউড সিঙ্ক ফোনের জায়গা কমায় না; ফোনে পুরো ডেটাই থাকে।

নতুন: পণ্য এন্ট্রিতে লাভ % ও হোলসেল দর, ক্লাসিক বাংলা ফন্ট
- পণ্য যোগ/এডিটে ক্রয়মূল্য দিয়ে "লাভ %" লিখলে বিক্রয়মূল্য নিজে হিসাব হয়; বিক্রয়মূল্য লিখলে লাভ % বেরিয়ে আসে। হোলসেল লাভ % ও হোলসেল দরও একইভাবে। লাভ % হিসাব হয় ক্রয়মূল্যের উপর।
- বিক্রি স্ক্রিনে "খুচরা দর / হোলসেল দর" বোতাম: হোলসেল বাছলে সব পণ্য হোলসেল দামে যোগ হয় (হাতে বদলানো দাম অপরিবর্তিত থাকে)। হোলসেল দর ফাঁকা থাকলে খুচরা দর ধরা হয়।
- পণ্যসমূহ তালিকায় হোলসেল দর দেখায়।
- ফন্ট: Noto Serif Bengali (ক্লাসিক)। প্রথমবার ইন্টারনেটে খুললে ফন্ট সেভ হয়ে অফলাইনেও থাকে।

নতুন: ফুল অফলাইন মোড
- ইন্টারনেট ছাড়াই অ্যাপ খোলে এবং বিক্রি, ক্রয়, খরচ, পার্টি, রিপোর্ট সবকিছু চলে। সব ডেটা ফোন/কম্পিউটারেই সেভ হয়।
- ইন্টারনেট ফিরলে নিজে থেকেই ক্লাউডে সিঙ্ক হয় (ক্লাউড লগইন বা GitHub সিঙ্ক চালু থাকলে)। সংযোগ মাঝপথে কেটে গেলে অ্যাপ নিজেই আবার চেষ্টা করে।
- একবার অন্তত ইন্টারনেটে https লিংকে (যেমন GitHub Pages) অ্যাপ খুলুন। "অফলাইনে চালানোর জন্য প্রস্তুত" লেখা দেখালে বুঝবেন অফলাইন চালু হয়েছে।
- GitHub-এ আপলোডের সময় sw.js ফাইলটিও দিতে হবে (শুধু index.html দিলে অফলাইন কাজ করবে না)।
- নেট দুর্বল বা "কানেক্টেড কিন্তু ইন্টারনেট নেই" থাকলে অ্যাপ ৪ সেকেন্ডের বেশি অপেক্ষা করে না, সেভ করা কপি খুলে দেয়।
- ডিভাইসের জায়গা প্রায় শেষ হলে বা ডেটা সেভ করা না গেলে সতর্কবার্তা আসে — তখনই সেটিংস -> ব্যাকআপ থেকে কপি করে রাখুন।
- Windows-এ Start-BDC-PRO.bat দিয়ে চালালে সবসময় অফলাইনে চলে।

ফোনে চালাতে
1. zip আনজিপ করুন, "index.html" Chrome-এ খুলুন।
2. প্রথমবার নাম, ফোন, দোকানের নাম ও পাসওয়ার্ড দিয়ে অ্যাকাউন্ট খুলুন।
3. ভাষা বদলাতে মেনুর ওপরের "English / বাংলা" বোতাম চাপুন (লগইন পর্দা ও সেটিংসেও আছে)।

GitHub Pages-এ রাখলে আইকন কীভাবে আসবে
1. GitHub-এ নতুন repository খুলুন (Public)।
2. zip নয় — আনজিপ করা ফোল্ডারের ভেতরের সব ফাইল ও icons ফোল্ডার আপলোড করুন
   (GitHub zip নিজে খোলে না)। শুধু index.html আপলোড করলেও আইকন আসবে।
3. Settings -> Pages -> Source: "Deploy from a branch" -> main / (root) -> Save।
4. ১-২ মিনিট পর https://আপনার-নাম.github.io/repository-নাম/ লিংকে খুলুন।
5. Android (Chrome): ⋮ মেনু -> "Install app" বা "Add to Home screen"।
   iPhone (Safari): Share -> "Add to Home Screen"।
6. আগে যোগ করা শর্টকাটে পুরোনো আইকন থাকলে সেটি মুছে আবার যোগ করুন — ফোন আইকন জমিয়ে রাখে।

নতুন (v1.7): ব্যাংক ট্রান্সফার, বিস্তারিত পণ্য তালিকা, ইনভয়েস মেনু, Windows ইনস্টলার
- ব্যাংক লেনদেন -> (+): ক্যাশ থেকে ব্যাংক, ব্যাংক থেকে ক্যাশ, বা এক ব্যাংক থেকে অন্য ব্যাংকে টাকা ট্রান্সফার। ক্যাশ ও ব্যাংকের ব্যালেন্স নিজে থেকে মিলে যায়।
- পণ্যসমূহ: প্রতিটি পণ্যের ক্রয়মূল্য, বিক্রয়মূল্য, পরিমাণ ও মোট মূল্য; ওপরে মোট পণ্য, মোট মজুদ ও মজুদের মোট মূল্য। ক্যাটাগরি অনুযায়ী ফিল্টার ও প্রিন্ট করা যায়।
- মেনুর নতুন "ইনভয়েস": সব পুরোনো ইনভয়েস (বিক্রি, ক্রয়, ফেরত, অর্ডার) এক জায়গায় দেখুন, ধরন/তারিখ/নাম দিয়ে খুঁজুন, পেন্সিল আইকনে ভুল সংশোধন করুন। (+) দিয়ে নতুন ইনভয়েস।
- Windows: BDC-PRO-Setup.bat ডাবল-ক্লিক করলে অ্যাপ ইনস্টল হয়, ডেস্কটপে "BDC PRO" শর্টকাট আসে এবং আলাদা উইন্ডোতে (Chrome/Edge) খোলে। ISO ফাইলে ডাবল-ক্লিক করে ড্রাইভ খুলে সেখান থেকেও চালাতে পারেন।
  ডেটা ওই কম্পিউটারের %LOCALAPPDATA%\BDC-PRO-তে জমে। মুছতে Uninstall-BDC-PRO.bat চালান (আগে ক্লাউড সিঙ্ক করে রাখুন)।
  Windows SmartScreen সতর্ক করলে "More info" -> "Run anyway" চাপুন।

নতুন (v1.6): নতুন ডিভাইসে প্রথমবার পাসওয়ার্ড, তারপর আর নয়
- নতুন ফোন/কম্পিউটারে অ্যাপ খুলে "আগে থেকে অ্যাকাউন্ট আছে? GitHub থেকে ফিরিয়ে আনুন" চাপুন।
  রিপোজিটরি ও টোকেন দিন -> দোকান বাছুন -> আপনার পাসওয়ার্ড দিন। ব্যস, ডেটা চলে আসবে ও ক্লাউড সিঙ্কও চালু হবে।
- এরপর ওই ডিভাইসে আর পাসওয়ার্ড চাইবে না। প্রতিবার চাইতে হলে সেটিংস -> প্রোফাইল -> অ্যাপ লক বদলান।
- অ্যাকাউন্টের নাম, ফোন ও পাসওয়ার্ডের হ্যাশ (পাসওয়ার্ড নিজে নয়) ক্লাউডের কপির সাথে সেভ হয়। এক ডিভাইসে পাসওয়ার্ড বদলালে সিঙ্কের পর অন্য ডিভাইসেও নতুন পাসওয়ার্ড চলে।
- জরুরি: প্রথম ডিভাইসে এই সংস্করণ চালিয়ে একবার সিঙ্ক হতে দিন (হোমের মেঘ আইকন সবুজ হবে), তারপর নতুন ডিভাইসে ফিরিয়ে আনুন।
- আগের ফোনের পাসওয়ার্ড এখন থেকে ফোনে হ্যাশ করে রাখা হয় (আগে সাধারণ লেখা ছিল)।

নতুন (v1.5.3): অ্যাপ লক। এখন অ্যাপ খুললেই পাসওয়ার্ড চায়, আর ৫ মিনিটের বেশি অন্য অ্যাপে থাকলে আবার লক হয়। সেটিংস -> প্রোফাইল -> অ্যাপ লক থেকে 'এই ডিভাইসে লগইন করা থাকবে' বাছলে আগের মতো সরাসরি খুলবে।

নতুন (v1.5.2): মেনু থেকে Subscribe/প্যাকেজ ও সাবস্ক্রিপশন পেজ বাদ দেওয়া হয়েছে। অ্যাপের সব ফিচার শুরু থেকেই ফ্রি।

নতুন (v1.5.1): হোমের মুনাফা এখন খরচ বাদ দিয়ে (নিট মুনাফা) দেখায়; নিচে ছোট করে মোট মুনাফা ও খরচ লেখা থাকে। লাভ-ক্ষতি ও ব্যালেন্স শীটে আগে থেকেই খরচ বাদ যেত।

নতুন (v1.5): ডেক্সটপ ভিউ
- ব্রাউজার উইন্ডো ৯০০ পিক্সেলের চেয়ে চওড়া হলে অ্যাপ ডেক্সটপ ভিউতে চলে: বাঁ দিকে সবসময় খোলা মেনু, ডান দিকে চওড়া ড্যাশবোর্ড, দুই কলামের তালিকা ও ফর্ম, পপ-আপ ডায়ালগ।
- ফোন বা ছোট উইন্ডোতে আগের মতো মোবাইল ভিউ। ব্রাউজারে Ctrl + দিয়ে বেশি জুম করলে উইন্ডো ছোট গণ্য হয়ে মোবাইল ভিউ আসতে পারে — Ctrl 0 দিয়ে জুম ঠিক করুন।

নতুন (v1.4): ব্যালেন্স শীট ও ইনভয়েস ডিজাইন
- মেনু -> রিপোর্ট -> "ব্যালেন্স শীট": তারিখ বেছে সেই দিন পর্যন্ত সম্পদ (নগদ, ব্যাংক, পাওনা, মজুত পণ্য), দায় (দেনা) ও স্বত্ব দেখুন। প্রিন্ট/PDF করা যায়।
  মজুত পণ্য বর্তমান ক্রয়মূল্যে ধরা হয়। "মূলধন ও অন্যান্য সমন্বয়" হলো মিলানোর অঙ্ক।
- ইনভয়েসের ৬টি ডিজাইন: ক্লাসিক, মডার্ন, ফর্মাল (A4), থার্মাল ৮০ মিমি, থার্মাল ৫৮ মিমি, মিনিমাল।
  যেকোনো ইনভয়েস খুলে ওপরের বোতামে ডিজাইন বদলান। ডিফল্ট ঠিক করতে সেটিংস -> ইনভয়েস ডিজাইন।
  সেটিংসে দোকানের ঠিকানা দিন ও লোগো দেখানো/না-দেখানো ঠিক করুন।
- প্রিন্টে ফর্মাল/ক্লাসিক/মডার্ন/মিনিমাল A4 কাগজে, থার্মাল ডিজাইন রসিদ প্রিন্টারের ৮০/৫৮ মিমি কাগজে যায়
  (প্রিন্ট ডায়ালগে আপনার রসিদ প্রিন্টারটি বেছে নিন)।

ক্লাউড সিঙ্ক (GitHub দিয়ে)
1. GitHub-এ একটি নতুন **Private** রিপোজিটরি খুলুন (যেমন bdc-data), "Add a README" টিক দিন।
   (অ্যাপ যে পাবলিক রিপোজিটরিতে রাখা আছে সেটি ডেটার জন্য ব্যবহার করবেন না — অ্যাপ পাবলিক রিপোজিটরি গ্রহণ করে না।)
2. GitHub -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens -> Generate new token।
   Expiration দিন; Repository access: Only select repositories -> ওই রিপোজিটরি;
   Permissions -> Repository permissions -> Contents: Read and write।
3. টোকেন (github_pat_...) কপি করুন। অ্যাপে সেটিংস -> ক্লাউড সিঙ্ক: রিপোজিটরি (আপনারনাম/bdc-data) ও টোকেন দিয়ে "সংযোগ করুন"।
4. প্রথম ফোনে "এই দোকানের ডেটা ক্লাউডে আপলোড করুন"।
5. দ্বিতীয় ফোনে একই রিপোজিটরি ও টোকেন দিয়ে সংযোগ করে "ক্লাউডে থাকা দোকানের সাথে যুক্ত করুন" -> দোকান বেছে নিন।
6. এরপর অটো সিঙ্ক চলবে (কিছু বদলালে ~৪ সেকেন্ড পরে, অ্যাপ খুললে, প্রতি ~৯০ সেকেন্ডে)। হোমের ওপরে মেঘ আইকনে সবুজ = ঠিক, হলুদ = চলছে, লাল = সমস্যা, ধূসর = অফলাইন। আইকনে চাপলে এখনই সিঙ্ক হয়।
- দুই ফোনে আলাদা সময়ে করা কাজ একসাথে মিশে যায় (সব লেনদেন থাকে)। একই এন্ট্রি দুই ফোনে বদলালে পরেরটি জেতে; মোছা এন্ট্রি অন্য ফোন থেকেও মুছে যায়।
- দুই ফোনে একই সময়ে বিক্রি লিখলে ইনভয়েস নম্বর (যেমন S-0005) দুটো একই হতে পারে — লেনদেন হারায় না।
- টোকেন শুধু ওই ডিভাইসে থাকে। ফোন হারালে GitHub থেকে টোকেনটি Revoke করুন।
- ক্লাউড সিঙ্ক ব্যাকআপের বিকল্প নয় — মাঝেমধ্যে সেটিংস -> ব্যাকআপ থেকেও কপি করে রাখুন।
- "অ্যাকাউন্ট রিসেট" করলে ক্লাউডের কপিও মুছে যায়।

জরুরি কথা
- ডেটা এই ব্রাউজারেই জমা থাকে (সার্ভারে যায় না)। নিয়মিত সেটিংস -> ব্যাকআপ থেকে "কপি" করে রাখুন।
- একই ঠিকানা/ব্রাউজার থেকে খুলুন; অন্য ঠিকানায় খুললে ডেটা দেখা যাবে না।
- পাসওয়ার্ড শুধু স্ক্রিন লক করে, এনক্রিপশন নয়।

English
-------
New: big storage and backup file
- Data now lives in the browser's IndexedDB (was localStorage, ~5 MB limit). Existing data moves over by itself the first time you open this version; nothing is lost.
- Settings -> Backup: "Download backup file" and "Restore from file". When the data is large only the file backup is shown.
- The app reminds you if no backup file was taken for 30 days. Keep the file on Google Drive or a pen drive - that is the real 10-year safety.
- Cloud sync does not reduce phone storage use; the phone still keeps all the data.

New: profit % and wholesale price on product entry, classic Bangla font
- On a product, type a purchase price and a "Profit %" and the sale price is calculated; type the sale price and the profit % is shown. Same for wholesale profit % and wholesale price. Profit % is on the purchase price.
- New sale screen has Retail / Wholesale price buttons: choose Wholesale and items are added at the wholesale price (prices you typed by hand are left alone). If a product has no wholesale price, the retail price is used.
- The product list shows the wholesale price.
- Font: Noto Serif Bengali (classic). It is saved on the first online visit and then works offline.

New: full offline mode
- The app opens with no internet, and sales, purchases, expenses, parties and reports all work. Everything is saved on the device.
- When the internet returns it syncs to the cloud by itself (if Cloud Login or GitHub sync is on). If the connection drops mid-sync the app retries on its own.
- Open the app once online over https (e.g. GitHub Pages). When you see "Ready for offline use", offline mode is active.
- When uploading to GitHub, include sw.js too (index.html alone will not work offline).
- On a weak or "connected but no internet" link the app waits at most ~4 seconds, then opens the saved copy.
- A warning appears when device storage is almost full or cannot be written — take a backup (Settings -> Backup) right away.
- On Windows, Start-BDC-PRO.bat always runs fully offline.

Run on a phone
1. Unzip and open "index.html" in Chrome.
2. Create your account on first launch.
3. Switch language with the "English / বাংলা" button at the top of the menu (also on the login screen and in Settings).

Getting the icon to show on GitHub Pages
1. Create a new public repository on GitHub.
2. Upload the FILES inside the unzipped folder (including the icons folder) — not the .zip itself, GitHub does not unzip it.
   Uploading only index.html also works: the icon is built into that file.
3. Settings -> Pages -> Source: "Deploy from a branch" -> main / (root) -> Save.
4. After a minute or two open https://YOUR-NAME.github.io/REPOSITORY-NAME/
5. Android (Chrome): menu -> "Install app" / "Add to Home screen". iPhone (Safari): Share -> "Add to Home Screen".
6. If a shortcut was added earlier with the old icon, delete it and add it again — phones cache icons.

New in v1.7: bank transfers, detailed product list, Invoices menu, Windows installer
- Bank Transactions -> (+): move money from cash to a bank, from a bank to cash, or between two banks. Cash and bank balances update automatically.
- Products: purchase price, sale price, quantity and total value for every product; totals for products, stock and stock value at the top. Filter by category and print.
- New "Invoices" menu item: every old invoice (sales, purchases, returns, orders) in one place, search by type/date/name, and fix mistakes with the pencil icon. (+) creates a new invoice.
- Windows: double-click BDC-PRO-Setup.bat to install the app, get a "BDC PRO" desktop shortcut and open it in its own window (Chrome/Edge). You can also open the ISO (double-click) and run it from the drive.
  Data is kept on that computer under %LOCALAPPDATA%\BDC-PRO. To remove, run Uninstall-BDC-PRO.bat (sync to the cloud first).
  If Windows SmartScreen warns, click "More info" -> "Run anyway".

New in v1.6: password once on a new device, then never again
- On a new phone/computer open the app and tap "Already have an account? Restore from GitHub".
  Enter the repository and token -> pick the store -> enter your password. Your data comes back and cloud sync is switched on.
- After that this device does not ask for the password again. To ask every time, change Settings -> Profile -> App lock.
- Your account name, phone and a hash of the password (not the password itself) are saved with the cloud copy. Change the password on one device and after syncing the other device accepts the new one.
- Important: run this version on your first device and let it sync once (cloud icon turns green) before restoring on the new device.
- Passwords are now stored hashed on the phone (previously plain text).

New in v1.5.3: App lock. The app now asks for the password every time it opens, and locks again after more than 5 minutes in the background. Settings -> Profile -> App lock lets you choose 'Stay logged in on this device' instead.

New in v1.5.2: the Subscribe / package section and the Subscription page were removed from the menu. All features are free from the start.

New in v1.5.1: the profit on Home is now net of expenses (Net Profit), with gross profit and expenses shown underneath. Profit & Loss and the Balance Sheet already deducted expenses.

New in v1.5: Desktop view
- When the browser window is wider than 900 px the app switches to a desktop layout: an always-open sidebar menu, a wide dashboard, two-column lists and forms, and pop-up dialogs.
- Phones and narrow windows keep the mobile layout. Zooming in a lot (Ctrl +) makes the window count as narrow and brings back the mobile layout - press Ctrl 0 to reset the zoom.

New in v1.4: Balance Sheet and invoice designs
- Menu -> Reports -> "Balance Sheet": pick a date to see assets (cash, bank, receivables, stock), liabilities (payables) and equity on that day. Printable / save as PDF.
  Stock is valued at the current purchase price. "Capital & other adjustments" is the balancing figure.
- Six invoice designs: Classic, Modern, Formal (A4), Thermal 80 mm, Thermal 58 mm, Minimal.
  Open any invoice and use the buttons at the top to switch. Set the default in Settings -> Invoice design.
  Add your store address and choose whether to show the logo in Settings.
- Printing: Formal/Classic/Modern/Minimal use A4; the thermal designs use 80/58 mm receipt paper
  (choose your receipt printer in the print dialog).

Cloud sync (via GitHub)
1. Create a new PRIVATE repository on GitHub (for example bdc-data) and tick "Add a README".
   (Do not use the public repository that hosts the app for data — the app refuses public repositories.)
2. GitHub -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens -> Generate new token.
   Set an expiration; Repository access: Only select repositories -> that repository;
   Permissions -> Repository permissions -> Contents: Read and write.
3. Copy the token (github_pat_...). In the app: Settings -> Cloud Sync: enter yourname/bdc-data and the token, tap Connect.
4. On the first phone tap "Upload this store to the cloud".
5. On the second phone connect the same repository and token, tap "Link to a store already in the cloud" and pick the store.
6. Auto sync then runs (about 4 seconds after a change, when the app opens, and every ~90 seconds). The cloud icon at the top of Home: green = OK, yellow = syncing, red = problem, grey = offline. Tap it to sync right now.
- Work done on two phones at different times is merged (no transaction is lost). If the same entry is edited on both, the later edit wins; deleted entries are deleted everywhere.
- If two phones create a sale at the same moment, both may get the same invoice number (e.g. S-0005) — no transaction is lost.
- The token is stored only on that device. If you lose a phone, revoke the token on GitHub.
- Cloud sync is not a replacement for backups — also copy a backup from Settings -> Backup now and then.
- "Reset Account" also clears the cloud copy.

Important
- Data is stored in this browser only; copy a backup regularly from Settings -> Backup.
- Open the app from the same address in the same browser every time.
- The password only locks the screen; it is not encryption.
