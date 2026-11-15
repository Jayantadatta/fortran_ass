@echo off
title Fortran Practice Lab
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install it from nodejs.org, then run this file again.
  pause
  exit /b 1
)

node server.js --open
pause
