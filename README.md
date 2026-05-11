# Laban sa Droga — Barangay Tugbok
### Informative Website on RA 9165 (Comprehensive Dangerous Drugs Act of 2002)

---

## 📁 File Structure

```
tugbok-drug-awareness/
│
├── index.html          ← Main website file (open this in browser)
├── css/
│   └── style.css       ← All styles (PNP color scheme)
├── js/
│   └── main.js         ← JavaScript (animations, navbar, interactions)
├── assets/
│   ├── pnp-logo.png    ← Place PNP logo here
│   └── pnpti-logo.png  ← Place PNPTI logo here
└── README.md           ← This file
```

---

## 🚀 How to Use

1. **Extract** the zip file to any folder on your computer.
2. **Add logos** — Place the official PNP and PNPTI logo images in the `assets/` folder:
   - Name them exactly: `pnp-logo.png` and `pnpti-logo.png`
   - If logos are missing, the site will show styled text badges instead.
3. **Open** `index.html` in any modern browser (Chrome, Firefox, Edge, etc.)
4. **No server required** — this is a static website that works offline.

---

## 🔗 Paste Your Report Links

Open `index.html` in a text editor and find these two lines:

```html
<a href="#" class="report-btn report-btn-primary" id="btnPDEA">
<a href="#" class="report-btn report-btn-secondary" id="btnAnon">
```

Replace the `#` inside `href="#"` with your actual links:

```html
<a href="https://your-pdea-link-here.com" ...>
<a href="https://your-anonymous-tip-link.com" ...>
```

---

## 🎨 Color Scheme

Based on the Philippine National Police (PNP) official colors:
- **Navy Blue** `#003087` — Primary brand color
- **Gold** `#c9a227` — Accent / highlights
- **Red** `#c0392b` — Warnings / alerts
- **White** `#ffffff` — Text on dark backgrounds

---

## 📖 Website Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | Full-screen intro with PNP/PNPTI logos |
| 2 | RA 9165 Overview | What the law is and its penalties |
| 3 | Prevention | 6 ways to prevent drug use |
| 4 | Citizen Actions | 5 steps citizens can take |
| 5 | Family Involvement | What to do if a family member is involved |
| 6 | Witness Guide | Do's and Don'ts + emergency hotlines |
| 7 | Rights | Rights of an arrested person |
| 8 | Report | PDEA and Anonymous Tip buttons |

---

## 📞 Hotlines Featured

- PNP: **117 / 8722-8888**
- PDEA: **0998-598-7326**
- DDB: **(02) 8928-8973**

---

## ✅ Credits

**Credits to PSBRC Batch 2025-01 Charlie Company IT Man**  
Barangay Tugbok Anti-Drug Awareness Initiative · 2025

---

*Website requires internet connection for Google Fonts to load. For offline use, the site will fall back to system fonts.*
