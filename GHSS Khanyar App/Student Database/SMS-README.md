# GGHSS Khanyar – Student Management System (SMS)
## Setup & Deployment Guide

---

## 📁 FILE STRUCTURE

Place all files in one folder — `jkbose-school-app`:

```
jkbose-school-app/
├── sms-index.html        ← Main app (all HTML + CSS + JS)
├── sms-manifest.json     ← PWA manifest
├── sms-service-worker.js ← Offline caching
├── author.jpg            ← Mateen Yousuf's photo
└── principal.jpg         ← Ms. Wahida Sheikh's photo
```

> Rename photos exactly as `author.jpg` and `principal.jpg` before placing them.

---

## 💾 HOW TO SAVE FILES

1. Create a folder on Desktop: `jkbose-school-app`
2. Copy all 5 files into it
3. Save staff photos with correct filenames

---

## 🌐 HOW TO RUN LOCALLY

### Option A – VS Code Live Server (Best for PWA)
1. Install **VS Code** → install extension **Live Server** (by Ritwick Dey)
2. Open the `jkbose-school-app` folder in VS Code
3. Right-click `sms-index.html` → **Open with Live Server**
4. Opens at `http://127.0.0.1:5500/sms-index.html`

### Option B – Python Server
```bash
cd jkbose-school-app
python -m http.server 8080
# Open: http://localhost:8080/sms-index.html
```

---

## 📱 HOW TO INSTALL AS APP

### Android (Chrome):
1. Open the app URL in Chrome
2. The install banner appears automatically inside the app
3. Or tap **⋮ menu → Add to Home Screen**

### iOS (Safari):
1. Open app in Safari
2. Tap **Share ⬆️ → Add to Home Screen**

### Desktop (Chrome/Edge):
1. Look for ⊕ icon in address bar
2. Or use the install banner inside the app

---

## 🚀 HOW TO HOST FOR FREE

### Netlify (Easiest — 2 minutes):
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag & drop the entire `jkbose-school-app` folder onto the dashboard
3. Get instant HTTPS URL → Share with staff

### GitHub Pages:
1. Create account at [github.com](https://github.com)
2. New repository → Upload all files
3. Settings → Pages → Source: `main` branch → Save
4. URL: `https://yourusername.github.io/jkbose-school-app/sms-index.html`

---

## ✨ FEATURES

| Feature | Status |
|---------|--------|
| Add student with 10 fields | ✅ |
| Edit student records | ✅ |
| Delete students | ✅ |
| Student profile view | ✅ |
| Add remarks per student | ✅ |
| Search by name/roll/phone | ✅ |
| Filter by class & section | ✅ |
| Sort by name/class/roll | ✅ |
| 20 demo students included | ✅ |
| Export as Text (.txt) | ✅ |
| Export as CSV | ✅ |
| Print/PDF view | ✅ |
| JSON backup download | ✅ |
| Restore from JSON backup | ✅ |
| Statistics dashboard | ✅ |
| Dark mode toggle | ✅ |
| Toast notifications | ✅ |
| Offline PWA | ✅ |
| Installable on device | ✅ |

---

## 🔐 DATA STORAGE

All data stored in **browser localStorage**:
- Key: `sms_students` → Array of student objects
- Works 100% offline, no server needed
- Data persists across sessions on the same device
- Use **Backup** feature to move data between devices

---

Developed by **Mateen Yousuf** (Teacher & Developer)  
**GGHSS Khanyar**, Srinagar, J&K  
Principal: **Ms. Wahida Sheikh**
