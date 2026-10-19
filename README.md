# Jacky Yu — Game Programming Portfolio

A responsive, single-page portfolio based on the supplied hand-drawn layout.

## Open locally

Double-click `index.html` to open it in any modern browser. No build tools or installation required. (Fonts load from Google Fonts when online; fallback fonts work offline.)

## Customize

- Edit `index.html` to update your introduction, project names, links, email, and skills.
- Edit `script.js` -> `projectData` to change the text shown when a visitor clicks **View Project Details**.
- Edit `styles.css` to change colors and layout. Most colors are in the `:root` block.
- The project images are CSS illustrations/placeholders, not actual game screenshots. Replace `<div class="project-art ...">` with your own screenshots or videos when available.
- Project descriptions are intentionally conservative and based on your resume. Add exact tools, results and media when verified.

## Publish for free using GitHub Pages

1. Create a new public GitHub repository (e.g. `portfolio`).
2. Upload the three website files (`index.html`, `styles.css`, `script.js`) to the repo root.
3. Open repository **Settings > Pages**.
4. Select **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
5. GitHub will show your published portfolio URL once deployment finishes.

This is a static portfolio: no backend required.

## Interactive background
Click a non-button/non-link area of the page to create a neon-green ripple wave. The effect is in `script.js` (`pointerdown` handler) and `styles.css` (`.background-ripple` and `@keyframes background-wave`). Motion is disabled when the visitor requests reduced motion.
