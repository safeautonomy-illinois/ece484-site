# ECE484 MkDocs Site

This repo hosts the ECE484 course website using MkDocs Material. The site is published via `mkdocs gh-deploy` to the `gh-pages` branch and served at `https://safeautonomy-illinois.github.io/ece484-site/`.

## Content organization (by semester)

Default (current) term content lives at the top level; archived terms live under `docs/archive/`.

```
docs/
  index.md                     # Current term landing page (Overview)
  spring-2026/                 # Current term pages
    lectures.md
    assignments.md
    team.md
    projects.md
    resources.md
    policies.md
  archive/
    fall-2025/
      index.md                 # Archived term landing page (Overview)
      lectures.md
      assignments.md
      team.md
      projects.md
      resources.md
      policies.md
  images/                      # Shared images
    team/                      # Cropped circular team avatars
```

When a new term starts:
- Copy the most recent term folder (e.g., `spring-2026/`) into the new term folder.
- Update `docs/index.md` to point to the new term overview.
- Keep prior terms under `docs/archive/<term>/` and add them under the Archive nav in `mkdocs.yml`.

## Path standards

The site is served from `/ece484-site/`, so use absolute paths that include the repo base:
- Images: `/ece484-site/images/...`
- Team avatars: `/ece484-site/images/team/...`

These paths resolve correctly in both local `mkdocs serve` and on GitHub Pages. Note that VS Code Markdown preview may not resolve these paths because it does not know the site root.

## Content standards

- **No front matter**: Markdown files should not include `---` front matter.
- **Overview** pages are always `index.md` for each term.
- **Team pages** should use the circular avatar images in `docs/images/team/` and keep a consistent size (currently 160×160).
- **Images** belong in `docs/images/` and should be referenced using the absolute path standard above.

## Publishing

Manual deploy (Actions is disabled for this repo):
```
git add .
git commit -m "Update site content"
git push origin main
python -m mkdocs gh-deploy --force
```

This publishes to the `gh-pages` branch. GitHub Pages should be configured to serve from `gh-pages` root.

## Notes for future maintainers

- If the repo name changes, update `mkdocs.yml` (`site_url`) and the image base paths (`/ece484-site/...`).
- Keep `site/` out of version control (see `.gitignore`).
- The `search` plugin generates `lunr.js` and index files during build; these live only in `gh-pages`, not in `main`.
