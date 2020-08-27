@echo off
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
start /min "" module.bat dms_server j2_localhost_server.json
rem START "" %BROWSER% --app="http://j2.localhost/sites/dynniq/dms/" --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache
