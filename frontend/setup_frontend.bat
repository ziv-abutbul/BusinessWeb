@echo off
echo ============================
echo   Frontend Setup (Angular)
echo ============================

:: התקנת Angular CLI אם לא קיים
where ng >nul 2>nul
if %errorlevel% neq 0 (
    echo Installing Angular CLI...
    npm install -g @angular/cli@16
)

:: התקנת התלויות
npm install

echo.
echo ✅ Frontend installation completed!
echo כדי להפעיל את הפרונט:
echo cd frontend
echo ng serve --open
