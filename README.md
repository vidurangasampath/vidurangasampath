# Viduranga Sampath — Portfolio

A responsive one-page portfolio built with plain HTML, CSS and JavaScript. The layout follows the supplied reference: dark rounded navigation, large left-aligned intro, circular portrait on the right, strong CTA, and a simple proof/focus strip below the hero.

## Run locally

### Option 1 — VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 2 — Python
From this folder run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Files

- `index.html` — all page content and structure
- `styles.css` — full responsive design
- `script.js` — mobile menu, active navigation and scroll reveal effects
- `assets/profile.png` — profile photo
- `Viduranga_Sampath_CV.pdf` — downloadable CV

## Edit quickly

- Main colors: edit CSS variables at the top of `styles.css`.
- Main hero text: edit the `#home` section in `index.html`.
- Projects: edit cards inside `#projects`.
- Contact details: search for `vidurangasampath74@gmail.com` and the LinkedIn URL in `index.html`.

## Deploy

This is a static site and can be deployed directly to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any normal web host. No build command is needed.
