#!/bin/bash
cd frontend

# התקנת Angular CLI אם חסר
npm install -g @angular/cli@16

# התקנת כל התלויות מה-package.json
npm install

# הרצה
ng serve --open

#chmod +x frontend-setup.sh
