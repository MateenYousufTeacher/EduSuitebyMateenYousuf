# 🏫 GGHSS Khanyar – School ERP PWA
## Complete Setup & Deployment Guide

---

## 📁 FILE STRUCTURE

```
/jkbose-school-app/
├── index.html          ← Main app (entire ERP inside this file)
├── manifest.json       ← PWA manifest
├── service-worker.js   ← Offline caching worker
├── author.jpg          ← Photo of Mateen Yousuf (Teacher/Developer)
└── principal.jpg       ← Photo of Ms Wahida Sheikh (Principal)
```

> ⚠️ **IMPORTANT:** You must add `author.jpg` and `principal.jpg` yourself. Place real photos in the folder.

---

## 💾 STEP 1 – HOW TO SAVE FILES

1. Create a folder on your computer called `jkbose-school-app`
2. Save all generated files into this folder:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
3. Add your photos:
   - Rename Mateen Yousuf's photo → `author.jpg`
   - Rename Ms Wahida Sheikh's photo → `principal.jpg`
   - Place both in the same folder

---

## ▶️ STEP 2 – HOW TO RUN LOCALLY

### Option A: VS Code Live Server (Recommended)
1. Install VS Code: https://code.visualstudio.com
2. Install extension: **"Live Server"** by Ritwick Dey
3. Open the `jkbose-school-app` folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. App opens at `http://127.0.0.1:5500`

### Option B: Python Simple Server
```bash
cd jkbose-school-app
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Option C: Node.js
```bash
npx serve jkbose-school-app
```

> ⚠️ Do NOT open `index.html` directly as a file (file://) — service worker requires HTTP.

---

## 📱 STEP 3 – HOW TO INSTALL AS APP

### On Android Phone:
1. Open the app URL in Chrome browser
2. Tap the **⋮ menu** → **"Add to Home Screen"**
3. Tap "Install" when prompted
4. App icon appears on home screen — opens like a native app!

### On PC (Chrome/Edge):
1. Open the app in Chrome or Edge
2. Click the **install icon** (➕) in the address bar
3. Or: Menu → **"Install GGHSS Khanyar ERP"**

### On iPhone (Safari):
1. Open the URL in Safari
2. Tap **Share** → **"Add to Home Screen"**

---

## 🌐 STEP 4 – HOW TO HOST FOR FREE

### Option A: GitHub Pages (Best for school use)
1. Create account at https://github.com
2. Create new repository: `gghss-khanyar-erp` (set to **Public**)
3. Upload all files from your folder
4. Go to **Settings → Pages**
5. Source: **Deploy from branch → main → / (root)**
6. Your app URL: `https://YOUR-USERNAME.github.io/gghss-khanyar-erp`

### Option B: Netlify (Easiest)
1. Go to https://netlify.com → Sign up free
2. Drag & drop your entire `jkbose-school-app` folder onto the dashboard
3. Netlify gives you a URL instantly! (e.g., `https://gghss-khanyar.netlify.app`)
4. Optional: Connect custom domain

### Option C: Cloudflare Pages
1. Go to https://pages.cloudflare.com
2. Connect GitHub repo or upload directly
3. Very fast, free, unlimited bandwidth

---

## 🔧 FEATURES INCLUDED

| Module | Features |
|--------|----------|
| 🏠 Dashboard | Stats cards, quick actions, live data from all modules |
| 👩‍🎓 Students | Add/Edit/Delete, search, filter by class |
| 👩‍🏫 Staff | Staff management with designation, subject, employee ID |
| 📅 Attendance | Daily attendance, Present/Absent/Leave, history, % |
| 📩 Messaging | Send to classes/all students/staff, categories |
| 🧾 Admission | New admissions auto-add to students database |
| 📊 Exams & Results | Subject-wise marks, grade, percentage, term-wise |
| 📘 AIP Tracker | Annual Improvement Plan goals for staff with progress |
| 📅 Activities | Events calendar with categories and coordinators |
| 📚 Homework | Assign homework by class/subject, mark done |
| 🔍 Global Search | Search students, staff, messages instantly |
| 📤 Export/Import | Full data backup as JSON, restore from backup |
| 🌙 Dark Mode | System-wide dark theme toggle |
| 📱 PWA | Install as app, works offline |

---

## 🛡️ DATA STORAGE

All data is saved in **browser LocalStorage** — no internet needed!
- Data persists between sessions
- Use **Export** (📤) button regularly to backup data as JSON file
- Use **Import** (📥) to restore from backup

---

## 📞 DEVELOPER CONTACT

**Mateen Yousuf** – Teacher & Developer  
Govt Girls Higher Secondary School, Khanyar, Srinagar, J&K  
Principal: **Ms Wahida Sheikh**

---

*Built with ❤️ for GGHSS Khanyar – Offline-First School ERP v2.0*
