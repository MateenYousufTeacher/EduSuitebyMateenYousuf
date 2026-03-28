# GGHSS Khanyar – Attendance System
## Setup & Deployment Guide

---

## 📁 FILE STRUCTURE

Place all files inside a folder named `jkbose-school-app`:

```
jkbose-school-app/
├── index.html         ← Main app (all HTML + CSS + JS)
├── manifest.json      ← PWA manifest
├── service-worker.js  ← Offline caching
├── author.jpg         ← Photo of Mateen Yousuf (Teacher)
└── principal.jpg      ← Photo of Ms. Wahida Sheikh (Principal)
```

> **Important:** Replace `author.jpg` and `principal.jpg` with the actual photos.
> The photos from the WhatsApp images should be saved with exactly these filenames.

---

## 💾 HOW TO SAVE FILES

1. Create a folder on your Desktop: `jkbose-school-app`
2. Copy all 5 files into it
3. Save your staff photos as `author.jpg` and `principal.jpg` in the same folder

---

## 🌐 HOW TO RUN LOCALLY

### Option A – VS Code Live Server (Recommended)
1. Open VS Code
2. Install extension: **Live Server** (by Ritwick Dey)
3. Open the `jkbose-school-app` folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. App opens at `http://127.0.0.1:5500`
6. PWA install prompt will appear in browser

### Option B – Direct Browser (Limited)
1. Double-click `index.html` to open in browser
2. Basic features work; Service Worker needs a server to activate

### Option C – Python Server
```bash
cd jkbose-school-app
python -m http.server 8080
# Open: http://localhost:8080
```

---

## 📱 HOW TO INSTALL AS APP

### On Android:
1. Open the app URL in Chrome
2. Tap the **3-dot menu** → "Add to Home Screen"
3. Or wait for the automatic install banner inside the app

### On iOS Safari:
1. Open the app URL in Safari
2. Tap the **Share icon** (box with arrow)
3. Scroll down → "Add to Home Screen"

### On Desktop Chrome/Edge:
1. Look for the install icon (⊕) in the address bar
2. Or click the banner that appears inside the app

---

## 🚀 HOW TO HOST FOR FREE

### GitHub Pages (Free):
1. Create a GitHub account at github.com
2. Create a new repository (e.g., `gghss-khanyar-app`)
3. Upload all 5 files
4. Go to Settings → Pages → Select `main` branch → Save
5. Your app URL: `https://yourusername.github.io/gghss-khanyar-app`

### Netlify (Free, Easiest):
1. Go to netlify.com → Sign up free
2. Drag & drop the `jkbose-school-app` folder onto the Netlify dashboard
3. Your app gets an instant HTTPS URL like `https://gghss-app.netlify.app`

### Cloudflare Pages (Free):
1. Go to pages.cloudflare.com
2. Connect GitHub or upload folder directly
3. Deploy → Get permanent URL

---

## 🔐 DATA STORAGE

All data is saved locally in the browser's **localStorage**. This means:
- ✅ Works completely offline
- ✅ Data persists between sessions
- ❌ Data is per-device (not synced across devices)

---

## ✨ FEATURES

| Feature | Status |
|---------|--------|
| Class 9–12 attendance marking | ✅ |
| 20 demo students per class | ✅ |
| Add / Delete / Edit students | ✅ |
| Present / Absent toggle | ✅ |
| Daily attendance save | ✅ |
| Monthly report | ✅ |
| Search students | ✅ |
| Export as text file | ✅ |
| Monthly export | ✅ |
| Print view | ✅ |
| Dark mode | ✅ |
| Offline (PWA) | ✅ |
| Install on device | ✅ |

---

Developed by **Mateen Yousuf** | GGHSS Khanyar, Srinagar, J&K
