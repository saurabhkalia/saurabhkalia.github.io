# Saurabh Kalia — academic website

## Preview

Open `index.html` in a browser, or run this from this folder:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000. The site works without a build step. The design uses system sans-serif fonts and requires no external font downloads. No analytics, tracking scripts, forms, cookies, or backend are included.

## Before public launch

- Add your professional email, full LinkedIn URL, and GitHub URL to `assets/config.js`. They are intentionally empty placeholders. Empty values hide links and display a contact-details notice. Do not invent an email based on the domain.
- Review `files/saurabh-kalia-cv.pdf` before publication. It is an unchanged copy of the supplied CV and currently contains contact placeholders. Replace it with the final public PDF at the **same path**. The website has CV downloads enabled.
- Confirm the Sears internship dates and contribution (listed in the supplied plan but absent from the supplied CV). Confirm mentor/collaborator names and public-disclosure clearance before adding them.
- Add final reports, public code repositories, and detailed evaluation evidence when ready. Check any research collaborator or participant information before sharing.
- Review mobile layout, keyboard focus, link destinations, PDF downloads, and the three pages in a real browser. Visual browser QA was blocked by local network restrictions in the authoring environment. Offline local-link checks and JavaScript syntax checks were completed.

## Publish on GitHub Pages

1. Create a public repository, ideally `YOUR_USERNAME.github.io`. Put **the contents of this folder** at the repository root, including `.github/workflows/pages.yml` and `.nojekyll`. Do not upload only the ZIP or nest the entire folder inside the repository.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
3. Push the files to the `main` branch (or run the workflow manually from Actions). If your default branch has another name, update the workflow trigger.
4. Wait for the “Publish academic website” workflow to finish and inspect the Pages URL. The workflow copies only public site files to its deployment artifact.
5. In **Settings → Pages → Custom domain**, enter `saurabian.com` and save. This setting is required even though the repository includes a `CNAME` file. GitHub's custom Actions publishing ignores that file for domain configuration.

GitHub Pages is available for public repositories on GitHub Free. Official instructions: [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Connect saurabian.com

Verify the domain in GitHub account settings, then add it to the repository's Pages settings **before** changing DNS. At your domain provider, configure the apex (`@`) A records:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

Replace `YOUR_USERNAME` with your actual GitHub username. The `www` CNAME points to the GitHub hostname, without a repository path. Review existing records for these web hostnames and replace conflicting web records; preserve unrelated mail/TXT records. Enable **Enforce HTTPS** in Pages once available. DNS propagation and certificate issuance can take time.

The site's canonical URLs use `https://saurabian.com/`. Once deployed, verify both the apex and `www` redirect, both project pages, and `https://saurabian.com/files/saurabh-kalia-cv.pdf`. Add the verified domain to your final CV and advisor emails.

DNS values and sequence checked against [GitHub's custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) on November 4, 2026. Consult that page if GitHub changes its settings.

## Editing and maintenance

| File | Purpose |
| --- | --- |
| `index.html` | Introduction, research, projects, employment, CV, contact |
| `projects/assistive-communication.html` | Proposal and labeled conceptual architecture |
| `projects/forest-cover.html` | CV-backed experimental summary and result figure |
| `assets/style.css` | Shared design, responsive rules, print layout, reduced motion |
| `assets/config.js` | Contact URLs, CV availability, visible update date |
| `assets/site.js` | Activates supplied contact links and updates the date |
| `files/saurabh-kalia-cv.pdf` | Stable CV download; replace in place |
| `CNAME` | Desired hostname for portability/branch-based hosting |

Edit HTML directly. Contact examples are `email: "your-professional-address"`, `linkedin: "https://www.linkedin.com/in/your-handle/"`, and `github: "https://github.com/your-handle"`; replace with actual values, not these examples. Use HTTPS URLs. Update `lastUpdated` in `assets/config.js` whenever content changes. Static fallback dates appear in the HTML footer, so update those as well when changing the date.

No publication list is included because none was supplied. Research interests, proposed evaluation, and unfinished work are clearly distinguished from completed work. Forest-cover methods and the two Macro-F1 values are transcribed from the supplied CV, not independently reproduced. The bar chart visualizes those values on a 0–1 scale; it is not presented as a figure from the original report. The proposed user review/revision stage in the architecture is explicitly identified as a design direction.

Keep public documents in `files/`, use relative links, and add descriptive text for figures. The site can also be moved to any static host without source changes. GitHub Pages is the recommended starting point because this site requires only static hosting.
