# Validation — 18 September 2026

## Passed

- 58 HTML files checked, including legacy forwarding pages; 665 internal links, asset references and fragment targets resolve.
- 100 Chrome render checks across 25 routes at 320, 390, 768 and 1440 pixels wide. No horizontal overflow, missing images or JavaScript errors. The retained conference page was checked separately.
- Dedicated Blog navigation, featured Medium link, mobile layout and legacy blog redirect checked. Updated 3iS role wording and broader professional positioning checked.
- All 32 legacy page URLs redirect to clean addresses and preserve query strings and fragments with JavaScript enabled. The no-JavaScript redirect fallback and directory trailing-slash handling were checked.
- Canonical URLs, social-sharing URLs, sitemap entries, navigation and nested asset paths updated. All three recordings played on both `/` and `/media/` after migration.
- Desktop and mobile homepage visually inspected, along with case-study, contact and print layouts.
- One main landmark and one H1 per page; English language, page titles, descriptions, unique IDs and image alternative text checked.
- Mobile menu open/close, Escape handling and restored keyboard focus.
- Keyboard skip link and project filters (all seven categories, expected counts and pressed states).
- Contact required-field validation, simulated success, reset, failure, retained input and retry. Requests were intercepted locally; no live messages were sent.
- Navigation, case studies and native contact form remain available without JavaScript.
- Reduced-motion preference and résumé print styling checked.
- Street/home address and personal phone number omitted. Old PDFs and raw notebook outputs excluded; local user paths stripped from training downloads.

- Eight Photo Stories checked, including keyboard and JavaScript-disabled expansion, full-photo links, mobile rendering, and navigation at additional widths of 820, 900 and 1024 pixels.

- All three MP4 recordings decoded and played on the homepage and media page. Tested new photo/video entries, homepage featured selection and no-JavaScript video fallback. Existing recordings do not include caption files; optional WebVTT tracks are supported.

## Scope and limitations

This is a basic functional and rendering review, not a formal accessibility certification or cross-browser audit. Validation used headless Google Chrome on Windows. External links and account availability can change. Formspree delivery needs a post-deployment check by the owner; its existing endpoint has been retained. Archived DHIS2 code examples and Stata commands were not executed.

Live dashboards and beneficiary datasets are not included in the public website. Publishing and live form delivery should be checked separately.


