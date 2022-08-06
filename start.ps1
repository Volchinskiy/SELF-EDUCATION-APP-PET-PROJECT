Start-Process powershell -WorkingDirectory "./server-nest/" -ArgumentList "-noexit", "-command &{yarn start:dev}"
Start-Process powershell -WorkingDirectory "./react-v2/" -ArgumentList "-noexit", "-command &{yarn start}"
