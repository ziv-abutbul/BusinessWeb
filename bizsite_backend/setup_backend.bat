@echo off
echo ============================
echo   Backend Setup (Django)
echo ============================

:: יצירת סביבה וירטואלית
python -m venv venv

:: הפעלת הסביבה
call venv\Scripts\activate

:: התקנת ספריות
pip install --upgrade pip
pip install -r requirements.txt

:: הרצת מיגרציות
python manage.py migrate

echo.
echo ✅ Backend installation completed!
echo כדי להפעיל את השרת:
echo cd backend
echo venv\Scripts\activate
echo python manage.py runserver
