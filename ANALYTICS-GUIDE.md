# Portfolio analytics and search visibility

## Your dashboards

- [Google Analytics](https://analytics.google.com/analytics/web/#/a408765638p555107672/realtime/overview): visits, pages, engagement and traffic sources.
- [Google Search Console](https://search.google.com/search-console?resource_id=https%3A%2F%2Fseyiabolarin.github.io%2F): search queries, impressions, clicks and indexing.

Sign in with the Google account used during setup. Analytics property: **Seyi Abolarin — Portfolio & Blog**. Website stream: **Portfolio website**, measurement ID `G-SF1LP9QV0B`. This ID is public configuration, not a password.

## What to look at

1. **Realtime overview** confirms recent activity. Setup testing appears in the initial figures.
2. Under **Reports**, use **Pages and screens** to compare views and average engagement time. Filter the page path to `/blog/` to focus on articles. Use Analytics search if the report is not visible in navigation.
3. Use **Traffic acquisition** for sources such as LinkedIn, Google and direct visits.
4. Use **Events** for `article_scroll`, `resume_download`, `booking_click`, `contact_email_click`, `contact_page_click`, `code_download` and `generate_lead`.

`article_scroll` sends milestones at 25%, 50%, 75% and 90% of the article. Its event count counts milestones, not unique readers or proof of reading. `booking_click` means someone opened Calendly, not that they completed a booking. `generate_lead` is sent only after the contact service confirms successful submission. Downloads record link clicks, not completed transfers.

Average engagement time measures active engagement rather than the full time a tab remains open. These are estimates, not an exact stopwatch for every person. Standard reports need processing time; use Realtime for immediate checks. Visits before installation cannot be recovered.

## Track a LinkedIn post

Share this link to distinguish the portfolio article campaign:

https://seyiabolarin.github.io/blog/keep-your-portfolio-and-resume-up-to-date/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio_resume_article

Use short campaign names without personal information. Change `utm_campaign` for a new article or campaign.

## Visitor choice

Google Analytics loads only after a visitor chooses **Allow analytics**. **No thanks** leaves it unloaded. Visitors can change their choice using **Analytics preferences** in the footer. Choices expire after six months. Reports exclude people who decline analytics or block tracking and will not equal every actual visit.

Advertising features are disabled. Automatic enhanced measurement is off; the site sends the specific events above. Form contents, email addresses and arbitrary URL query parameters are not intentionally sent. The privacy page explains the implementation. Analytics is disabled on localhost previews.

## Keep search visibility healthy

- Give each new article a descriptive title, one main heading, an individual description, a canonical URL and useful image alternative text.
- Update blog cards in `assets/blog-posts.js`, add internal links and add the article's canonical URL to `sitemap.xml`.
- Reuse the article template, including its shared `assets/site.js` reference and accurate article structured data. Update dates only when content changes.
- Keep the `google-site-verification` meta tag in the homepage and the sitemap address in `robots.txt`.
- Check Search Console's **Performance**, **Pages** and **Sitemaps** reports periodically. Submission does not guarantee indexing or ranking.

The site is verified in Search Console. The sitemap was submitted on 20 September 2026; its initial fetch status requires a follow-up check in the Sitemaps report.

## Updating your local copy

These changes were committed directly to GitHub. Pull the latest repository changes before editing an existing clone. Preserve any uncommitted work first. The supplied ZIP is a website snapshot; keep your clone's `.git` folder when replacing website files.
