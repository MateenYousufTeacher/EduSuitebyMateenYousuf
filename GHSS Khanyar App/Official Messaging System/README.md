# GGHSS Khanyar – Messaging & Communication System
## Developed by: Mateen Yousuf (Teacher)
## Principal: Ms. Wahida Sheikh

---

## 📁 File Structure
```
jkbose-school-app/
├── index.html          ← Main app (all HTML + CSS + JS)
├── manifest.json       ← PWA manifest
├── service-worker.js   ← Offline caching
├── author.jpg          ← Your photo (add manually)
├── principal.jpg       ← Principal photo (add manually)
└── README.md
```

---

## 🚀 How to Run Locally

### Option A – VS Code Live Server (Recommended)
1. Install VS Code: https://code.visualstudio.com
2. Install "Live Server" extension by Ritwick Dey
3. Open the `jkbose-school-app` folder in VS Code
4. Right-click `index.html` → "Open with Live Server"
5. App opens at http://127.0.0.1:5500

### Option B – Python HTTP Server
```bash
cd jkbose-school-app
python -m http.server 8080
# Visit: http://localhost:8080
```

### Option C – Node.js
```bash
npx serve jkbose-school-app
```

---

## 📱 How to Install as App

### Android (Chrome)
1. Open in Chrome browser
2. Tap the three-dot menu (⋮)
3. Tap "Add to Home Screen"
4. App installs like a native app

### Desktop (Chrome/Edge)
1. Open in browser
2. Look for the install icon (⊕) in address bar
3. Click it and confirm install

---

## ☁️ How to Host for Free

### Netlify (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag your `jkbose-school-app` folder onto the page
3. Get a free live URL instantly!

### GitHub Pages
1. Create a GitHub account at github.com
2. Create a new repository
3. Upload all files
4. Settings → Pages → Deploy from main branch
5. URL: https://yourusername.github.io/repo-name

### Cloudflare Pages
1. Push to GitHub first
2. Go to https://pages.cloudflare.com
3. Connect your GitHub repo
4. Deploy automatically

---

## 💡 Features
- ✅ Create messages with title, content, audience, priority
- ✅ Message board with all messages
- ✅ Search by title or keywords
- ✅ Filter by class, priority, date
- ✅ Edit & delete messages
- ✅ Pin/unpin important messages
- ✅ Urgent announcement strip (marquee)
- ✅ Stats dashboard
- ✅ Dark mode
- ✅ Export as Text / JSON / Print
- ✅ Fully offline (LocalStorage + Service Worker)
- ✅ PWA installable

---

*GGHSS Khanyar – Technology in Education*
