@echo off
start /min "" module.bat dms_server j2.aliconnect.nl.em.json
start /min "" module.bat node_modules/aim-server j2.aliconnect.nl.control.json
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
START "" %BROWSER% --app="https://j2.aliconnect.nl//sites/dynniq/dms/root" --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache
