#!/bin/bash
echo "🚀 מתחילים התקנה מלאה של הפרויקט..."

# === Backend ===
echo "📦 מתקין backend..."
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
deactivate
cd ..

# === Frontend ===
echo "📦 מתקין frontend..."
cd frontend
npm install

echo "✅ סיום התקנה! "
echo "כדי להריץ:"
echo "  Backend: cd backend && source venv/bin/activate && python manage.py runserver"
echo "  Frontend: cd frontend && ng serve --open"
