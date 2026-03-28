# 👩‍🏫 GGHSS Khanyar – Staff Management System
## Developed by: Mateen Yousuf | Principal: Ms. Wahida Sheikh

---

## 📁 FILE STRUCTURE

```
jkbose-staff-app/
├── index.html          ← Entire app (all-in-one)
├── manifest.json       ← PWA install config
├── service-worker.js   ← Offline support
├── author.jpg          ← Mateen Yousuf's photo (add manually)
├── principal.jpg       ← Ms. Wahida Sheikh's photo (add manually)
└── README.md           ← This guide
```

---

## 🖼️ STEP 1: Add Your Photos

Place these two image files in the same folder as index.html:
- `author.jpg`   → Mateen Yousuf's photo (square, min 200×200px)
- `principal.jpg` → Ms. Wahida Sheikh's photo (square, min 200×200px)

If photos are missing, the app displays emoji fallbacks automatically.

---

## 💾 STEP 2: Save All Files

Create a folder named `jkbose-staff-app` and place all files inside:
- index.html
- manifest.json
- service-worker.js
- author.jpg
- principal.jpg

---

## 🖥️ STEP 3: Run Locally

### Option A – VS Code Live Server (Recommended)
1. Install VS Code → install **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**
3. Opens at: `http://127.0.0.1:5500`

### Option B – Python
```bash
cd jkbose-staff-app
python -m http.server 8080
# Open: http://localhost:8080
```

### Option C – Node.js
```bash
npm install -g http-server
http-server jkbose-staff-app -p 8080
```

> ⚠️ Do NOT open by double-clicking — PWA features require a local server.

---

## 📱 STEP 4: Install as App

**Android (Chrome):**
1. Open in Chrome → tap ⋮ menu → "Add to Home Screen" / "Install App"

**iPhone (Safari):**
1. Open in Safari → tap Share → "Add to Home Screen"

---

## 🌐 STEP 5: Host Free Online

**Netlify** (Easiest):
1. Go to netlify.com → sign up free
2. Drag and drop the entire folder
3. Instant URL like `gghss-staff.netlify.app`

**GitHub Pages:**
1. Create repo on github.com
2. Upload all files
3. Settings → Pages → deploy from main branch

---

## 🧠 FEATURES SUMMARY

| Feature | Description |
|---------|-------------|
| ➕ Add Staff | Full form with all staff details |
| 📋 Staff List | Sortable table with edit/delete/view |
| 👤 Profile View | Detailed staff profile popup |
| 🧾 Duties | Assign & track responsibilities |
| 🔍 Search | Search by name, subject, designation |
| 📊 Dashboard | Stats, key personnel, duty overview |
| 💾 Export JSON | Full backup download |
| 📊 Export CSV | Spreadsheet-compatible |
| 🖨️ Print List | Formatted printable staff directory |
| 📂 Import | Restore from JSON backup |
| 🌙 Dark Mode | Eye-friendly dark theme |
| 📴 Offline | Works with no internet connection |

---

## 🔒 DATA PRIVACY

All data is stored **locally in your browser** (localStorage).
No data is ever sent to any server. Use the JSON export to back up your data.

---

Developed by **Mateen Yousuf** — Teacher, GGHSS Khanyar  
Principal: **Ms. Wahida Sheikh** — GGHSS Khanyar, Srinagar
