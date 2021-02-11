@echo off
xcopy config.json ..\..\..\..\.. /Y
xcopy start*.bat ..\..\..\..\.. /Y
cd ..\..\..\..\..
call start_dms
