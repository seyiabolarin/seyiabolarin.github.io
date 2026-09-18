# Seyi Abolarin — Portfolio

Professional portfolio covering Information Management, MEAL (Monitoring, Evaluation, Accountability and Learning), Data Analytics and GIS, alongside digital health, research and capacity building.

## Deploy

Back up your existing repository. Copy this folder's contents into the root of `seyiabolarin.github.io`, including `.nojekyll`. Keep `.git` and any custom-domain `CNAME`. Remove superseded personal documents and programme data. Commit and push to your publishing branch.

In **Settings → Pages**, select **Deploy from a branch**, your publishing branch and **/(root)**. Check the published site and contact form after deployment. No build command or package installation is required.

For another domain, update canonical URLs, Open Graph URLs, structured data, `sitemap.xml` and `robots.txt`. The 404 page assumes domain-root hosting.

## Edit

See [EDITING-GUIDE.md](EDITING-GUIDE.md) for instructions and a photo-story template.

| File | Content |
| --- | --- |
| `index.html` | Homepage |
| `about/index.html` | Profile |
| `experience/index.html` | Experience and printable résumé |
| `projects/index.html`, `case-studies/` | Project cards and case studies |
| `photo-stories/index.html` | Photographs, captions and stories |
| `media/index.html`, `assets/media-data.js` | Playable recordings and the shared media list |
| `insights/index.html`, `insights/` | Writing and conference contributions |
| `blog/index.html`, `blog/` | Dedicated blog, including the featured Medium article and future posts |
| `resources/index.html` | Learning resources |
| `contact/index.html` | Contact form |
| `assets/images/` | Photos |
| `assets/site.css`, `assets/site.js` | Shared appearance and behaviour |

This is a static website: update the files and commit to GitHub. There is no administration dashboard. Navigation and footer markup are repeated across pages; update them consistently.

## Contact and maintenance

The contact form uses `https://formspree.io/f/mqapkjkd`; delivery depends on that endpoint remaining active in the owner's Formspree account. Email links use `seyiabolarin@hotmail.com`.

Keep personal addresses, phone numbers and beneficiary datasets out of public files. The résumé supports browser printing and saving as PDF. DHIS2 learning notes are archived examples; consult the linked official documentation for current installation requirements.

See [VALIDATION.md](VALIDATION.md) for testing scope. Photographs and programme materials retain their respective ownership and permissions; no blanket licence is applied to them.


## Clean page addresses

Pages live in folders containing an `index.html` file. For example, `projects/index.html` is published at `/projects/`, and `media/index.html` at `/media/`. Edit the folder's `index.html`, not the old root `.html` files; those redirect existing bookmarks.

Upload the entire package, including new folders, updated assets and the old `.html` redirect files. Keep `.git` untouched. Commit and push all changes together. The GitHub Pages publishing directory remains the repository root.

The new addresses take effect after deployment. Old links forward to the clean URLs using browser redirects, with a no-JavaScript refresh fallback. These are not server-side HTTP 301 redirects.

Preview locally with a web server. HTML paths start with `/` and assume hosting at the domain root. In `assets/media-data.js`, continue using `assets/media/...` paths; the renderer handles the site root.
