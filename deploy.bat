@echo off
setlocal enabledelayedexpansion

REM ============================================================================
REM ONE-TAP DEPLOY SCRIPT FOR USMAN GHANI PORTFOLIO (Windows)
REM ============================================================================
REM Usage:
REM   deploy.bat                         Deploy without updating resume
REM   deploy.bat Usman_Ghani_Resume.pdf  Deploy + update resume PDF
REM ============================================================================

set DOMAIN=https://usman-ops.netlify.app

echo.
echo =====================================================================
echo   Usman Ghani Portfolio - One-Tap Deploy
echo =====================================================================
echo.

REM --- Step 1: Handle resume PDF ---
if not "%~1"=="" (
    if exist "%~1" (
        echo [1/5] Copying resume PDF -^> public\resume.pdf
        copy /Y "%~1" public\resume.pdf >nul
        echo   ^> Resume updated
    ) else (
        echo [1/5] WARNING: File not found: %~1 -- skipping resume update
    )
) else (
    echo [1/5] No resume PDF provided -- using existing placeholder
    echo   Tip: pass the file path to update: deploy.bat MyResume.pdf
)
echo.

REM --- Step 2: Install deps if missing ---
if not exist node_modules (
    echo [2/5] Installing dependencies...
    call npm install --silent
    echo   ^> Dependencies installed
) else (
    echo [2/5] Dependencies already installed
)
echo.

REM --- Step 3: Build ---
echo [3/5] Building production site...
call npm run build --silent
echo   ^> Build complete
echo.

REM --- Step 4: Git commit + push ---
echo [4/5] Git commit + push
if exist .git (
    git add -A
    git diff --staged --quiet
    if errorlevel 1 (
        for /f "tokens=*" %%i in ('powershell -command "Get-Date -Format ''yyyy-MM-dd HH:mm:ss''"') do set TIMESTAMP=%%i
        git commit -m "Deploy !TIMESTAMP!" --quiet
        echo   ^> Committed
    ) else (
        echo   No changes to commit
    )
    git remote -v | findstr /C:"origin" >nul
    if not errorlevel 1 (
        for /f "tokens=*" %%b in ('git branch --show-current') do set BRANCH=%%b
        git push origin !BRANCH! --quiet
        echo   ^> Pushed to origin/!BRANCH!
    ) else (
        echo   No git remote -- skipping push
    )
) else (
    echo   Not a git repo -- skipping. Run: git init
)
echo.

REM --- Step 5: Netlify deploy ---
echo [5/5] Netlify deploy
where netlify >nul 2>nul
if not errorlevel 1 (
    echo   Deploying to production...
    call netlify deploy --prod --dir=dist --message "Deploy from deploy.bat"
    echo   ^> Deployed to Netlify
) else (
    echo   Netlify CLI not installed.
    echo   Install: npm i -g netlify-cli
    echo   Login:   netlify login
    echo   Link:    netlify link  (run once)
    echo.
    echo   Or drag dist\ folder to app.netlify.com/drop
)
echo.

REM --- Done ---
echo =====================================================================
echo   ^> Deploy complete
echo =====================================================================
echo.
echo   Live at: %DOMAIN%
echo.

REM Open in browser
start "" "%DOMAIN%"
echo   ^> Opened in browser.
echo.

endlocal
