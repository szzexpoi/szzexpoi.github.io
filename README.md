# Shi Chen — academic homepage

A simple, responsive, dependency-free, single-page academic website built for GitHub Pages. Its sections and navigation are inspired by the clean, text-first structure of https://qiushiwu.com/; all text and CSS here are independently written.

## Site sections

- About and Research are drafted from Shi Chen's CV and November 2026 research statement.
- Selected Publications, Teaching & Mentoring, and Service are included as starter sections based on the CV. Edit or expand them as desired.
- News, Software, DBLP, IBM Research and ORCID links are intentionally omitted.

## Deploy to GitHub Pages

1. Create a repository named `YOUR_USERNAME.github.io` (or open your existing GitHub Pages repository).
2. Upload the **contents** of this folder into the repository's root directory: `index.html`, `styles.css`, `main.js`, and `assets/`.
3. Commit and push to the `main` branch.
4. In GitHub, go to **Settings → Pages**, select **Deploy from a branch**, choose **main / (root)**, and save (if not already active).
5. Open `https://YOUR_USERNAME.github.io/`. Custom domains can be configured under Pages settings.

## Personalize before publishing

- **Photo:** Add `assets/profile.jpg` and change `assets/profile-placeholder.svg` to `assets/profile.jpg` in `index.html`. Adjust portrait height if needed.
- **CV:** `assets/Shi_Chen_CV.pdf` is already included and linked. Replace with your updated CV when necessary.
- **Google Scholar:** The link is from the CV and is already populated.
- **Papers:** Add real `[paper]`, `[code]`, or `[project]` links to the publication entries as they become available. No speculative links were used.
- **Public statement:** The full research statement PDF is **not** included in the deployable files, to avoid inadvertently publishing application materials. If you want it public, add it to `assets/` and link it deliberately.
- **Content:** Check the date, titles, author lists and submission statuses before making the site public; submissions may change.

All site assets are local and there is no build process, analytics, external font, framework or package installation.
