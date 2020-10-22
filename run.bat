@echo off
c:
cd \aliconnect\webroot\sites\schiphol\j2\qnode
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
rem IIS Server
START "" %BROWSER% --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache --app="http://schiphol.localhost/j2/qnode/webroot"
rem NodeJS Server
rem START "" %BROWSER% --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache --app="http://localhost:9000"

:node
cls
node index
pause
goto:node
