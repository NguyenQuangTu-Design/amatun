# Hubly CRM — SaaS Dashboard · UI/UX Case Study (recreation)

A static website recreation of the **Hubly CRM SaaS Dashboard** case study, built as a scrolling
presentation page with an embedded, interactive dashboard.

> ⚠️ **Credit & usage**
> The original **Hubly CRM** design is by **Dipa Inhouse** (Behance, 2025).
> This repository is a **study / portfolio recreation** for learning purposes only — not affiliated
> with or endorsed by the original author, and **not for commercial use**.
> Body copy here was rewritten and the competitor benchmark uses generic placeholders.

## Contents
- `index.html` — the case-study page (cover → thank you), 16 sections.
- `dashboard.html` — the standalone interactive CRM dashboard (embedded in the previews).
- `styles.css` — all styles (tokens, dashboard, case study).
- `script.js` — scroll-reveal + responsive scaling.

## Run locally
It is fully static — just open `index.html` in a browser.
Or serve it (recommended, so iframes load cleanly):

```bash
# Python
python -m http.server 8080
# or Node
npx serve .
```
Then open http://localhost:8080

## Deploy to GitHub Pages
1. Create a repo (recommended **Private**) and push these files to the default branch.
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick your branch and `/ (root)`, then **Save**.
3. Your site will be live at `https://<user>.github.io/<repo>/` in ~1 minute.

## Tech
Plain HTML + CSS + a little vanilla JS. No build step, no dependencies (Inter font via Google Fonts).
