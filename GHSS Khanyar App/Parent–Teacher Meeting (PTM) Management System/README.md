# 📱 GGHSS Khanyar – PTM System Setup Guide
## Developed by: Mateen Yousuf | Principal: Ms. Wahida Sheikh

---

## 📁 FILE STRUCTURE

```
jkbose-school-app/
├── index.html          ← Main app (entire app lives here)
├── manifest.json       ← PWA installability config
├── service-worker.js   ← Offline caching
├── author.jpg          ← Your photo (add manually)
├── principal.jpg       ← Principal's photo (add manually)
└── README.md           ← This guide
```

---

## 🖼️ STEP 1: Add Photos

1. Save **Mateen Yousuf's photo** as `author.jpg` in the folder
2. Save **Ms. Wahida Sheikh's photo** as `principal.jpg` in the folder
3. Both photos should ideally be square (1:1 ratio), at least 200×200px

---

## 💾 STEP 2: Save the Files

1. Create a folder named: `jkbose-school-app`
2. Place all 5 files inside it:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `author.jpg`
   - `principal.jpg`

---

## 🖥️ STEP 3: Run Locally

### Option A – VS Code Live Server (Recommended)
1. Open VS Code
2. Install extension: **Live Server** (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. App opens at: `http://127.0.0.1:5500/index.html`

### Option B – Python (built-in)
```bash
cd jkbose-school-app
python -m http.server 8080
```
Then open: `http://localhost:8080`

### Option C – Node.js http-server
```bash
npm install -g http-server
cd jkbose-school-app
http-server -p 8080
```

> ⚠️ Do NOT open index.html directly by double-clicking — PWA features (service worker, install) only work on a server.

---

## 📱 STEP 4: Install as Mobile App

1. Open the app in **Chrome** on Android
2. Tap the **3-dot menu** (⋮)
3. Select **"Add to Home Screen"** or **"Install App"**
4. App will appear on home screen like a native app ✅

On iPhone (Safari):
1. Tap Share button (□↑)
2. Tap **"Add to Home Screen"**

---

## 🌐 STEP 5: Host for Free

### Option A – GitHub Pages
1. Create account at github.com
2. New repository → name it `gghss-ptm`
3. Upload all files
4. Settings → Pages → Source: main branch
5. Live at: `https://yourusername.github.io/gghss-ptm`

### Option B – Netlify (Easiest)
1. Go to netlify.com → Sign up free
2. Drag & drop the `jkbose-school-app` folder
3. Instant live URL (e.g. `https://gghss-ptm.netlify.app`)

### Option C – Cloudflare Pages
1. Go to pages.cloudflare.com
2. Connect GitHub repo or upload directly
3. Free, fast, no limits

---

## 🔒 DATA PRIVACY

All data is stored **locally in the browser** using `localStorage`.
- No data is sent to any server
- Data persists between sessions
- Use **Export/Print Report** to save records externally
- Use **Reset** button to clear all data

---

## 📞 Support

Developed by: **Mateen Yousuf** — Teacher, GGHSS Khanyar
Principal: **Ms. Wahida Sheikh**
School: Govt. Girls Higher Secondary School, Khanyar, Srinagar
