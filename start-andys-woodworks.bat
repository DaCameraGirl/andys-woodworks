@echo off
title Andy's Woodworks - Dev Server
cd /d "%~dp0"
echo.
echo  ========================================
echo    Andy's Woodworks - Starting Dev Server
echo  ========================================
echo.
echo  Site will open at: http://localhost:3000
echo  Press Ctrl+C to stop the server.
echo.
start "" "http://localhost:3000"
npm run dev
