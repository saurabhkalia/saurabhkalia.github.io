# Saurabh Kalia — academic website

A portable, buildless website for PhD applications. Three hand-editable HTML pages; no installation or framework required. Prepared for the default GitHub Pages address.

## Preview

Open `index.html` in a browser, or run this from this folder:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000. The site works without a build step. The design uses system sans-serif fonts and requires no external font downloads. No analytics, tracking scripts, forms, cookies, or backend are included.

## Editing and maintenance

| File | Purpose |
| --- | --- |
| `index.html` | Introduction, research, projects, employment, CV, contact |
| `projects/assistive-communication.html` | Proposal and labeled conceptual architecture |
| `projects/forest-cover.html` | CV-backed experimental summary and result figure |
| `assets/academic.css` | Shared design, responsive rules, print layout, reduced motion |
| `assets/config.js` | Contact URLs, CV availability, visible update date |
| `assets/site.js` | Activates supplied contact links and updates the date |
| `files/saurabh-kalia-cv.pdf` | Stable CV download; replace in place |
