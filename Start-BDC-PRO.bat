@echo off
setlocal EnableExtensions
rem BDC PRO launcher - opens the app in its own window (Chrome or Edge), falls back to your default browser.
set "APPDIR=%~dp0"
set "DATADIR=%LOCALAPPDATA%\BDC-PRO\browser-profile"
set "URL=file:///%APPDIR:\=/%index.html"
set "BROWSER="
for %%B in ("%ProgramFiles%\Google\Chrome\Application\chrome.exe" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" "%LocalAppData%\Google\Chrome\Application\chrome.exe" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe") do (
  if not defined BROWSER if exist "%%~B" set "BROWSER=%%~B"
)
if defined BROWSER (
  start "" "%BROWSER%" --user-data-dir="%DATADIR%" --app="%URL%" --window-size=1280,800 --no-first-run --no-default-browser-check
) else (
  start "" "%APPDIR%index.html"
)
exit /b 0
