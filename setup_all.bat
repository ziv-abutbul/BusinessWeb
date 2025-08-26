@echo off
echo ============================
echo   Full Project Setup
echo ============================

:: Backend
echo.
echo === Backend Installation ===
cd backend
call setup_backend.bat
cd ..

:: Frontend
echo.
echo === Frontend Installation ===
cd frontend
call setup_frontend.bat
cd ..

echo.
echo ✅ All installations completed!
echo.
echo להפעלה:
echo ----------------------------
echo Backend:
echo   cd backend
echo   venv\Scripts\activate
echo   python manage.py runserver
echo.
echo Frontend:
echo   cd frontend
echo   ng serve --open
echo ----------------------------
