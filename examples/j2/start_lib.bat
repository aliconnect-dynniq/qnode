@echo off
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
if exist node_modules (
  SET LIB=node_modules\@aliconnect\qnode\lib
) else (
  SET LIB=..\..\lib
)
IF EXIST %LIB%\%1\webroot (
  START "" %BROWSER% --app="http://localhost:%2"^
   --use-fake-ui-for-media-stream^
   --window-position=0,0^
   --window-size=1680,1200^
   --disable-web-security^
   --allow-file-access-from-files^
   --disable-application-cache
)

START "" node %LIB%\%1 --config-http-port=%2 %3 %4 %5 %6 %7 %8 %9
