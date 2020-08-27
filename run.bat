@echo off
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
rem START "" %BROWSER% --app="http://schiphol.localhost/j2/webroot/" --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache

:node
cls
node index
pause
goto:node
