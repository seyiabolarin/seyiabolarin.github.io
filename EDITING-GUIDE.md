# Updating your portfolio

You can update this website yourself by editing its HTML files and committing the changes to GitHub. There is no admin login or visual content editor.

## Change text

1. Open your repository on GitHub and select the relevant file from the README's file table.
2. Open the file editor and search for a sentence you recognise.
3. Change the words between the HTML tags. Keep tags such as `<p>...</p>` and `<h2>...</h2>` intact.
4. Commit with a short description of your change.
5. Once GitHub Pages finishes publishing, refresh the site and check it on your phone and computer.

For larger changes, edit a local copy and preview through a local web server, such as your editor’s Live Server extension. Opening HTML directly from File Explorer will not resolve site-root links correctly. Keep a backup. GitHub's file history helps you recover previous versions.

## Add a photo story

For a simple photograph or playable video without a long story, use the media instructions below.

## Add a video or photograph to the media library

The homepage and `media/index.html` use the same list: **`assets/media-data.js`**. You only need to add an item once. No build command is required.

1. Upload your video into `assets/media/`, or a photograph into `assets/images/`. Use lowercase filenames with hyphens and no spaces.
2. For videos, use a browser-compatible MP4 (H.264 video and AAC audio) or WebM. You can upload a JPG cover image into `assets/media/` as well. Keep videos compressed and each repository file below GitHub's 100 MiB file limit.
3. Open `assets/media-data.js`. Copy an existing object, from `{` through `}`, and paste it before the closing `];`.
4. Put a comma between objects. Edit the title, description and file paths. Give every item a unique `id`.
5. Set `featured: true` to show it on the homepage and media page. Set `featured: false` to show it only on the media page. Items appear in the order of the list.
6. Commit the files, wait for publishing, then refresh both pages and test playback.

Example video entry (replace the sample values):

```js
{
  id: "my-new-video",
  type: "video",
  title: "My presentation title",
  description: "Describe the occasion and what the recording covers.",
  src: "assets/media/my-new-video.mp4",
  poster: "assets/media/my-new-video-cover.jpg",
  meta: "Presentation · September 2026",
  featured: true
}
```

The `poster` line is optional. To supply captions, add `captions: "assets/media/my-new-video.vtt"` with an accurate WebVTT captions file. The existing recordings have no caption files. The player provides playback, volume and fullscreen controls; it does not autoplay.

Example photograph entry:

```js
{
  id: "my-new-photo",
  type: "image",
  title: "A moment from the workshop",
  description: "Add a short caption or explanation.",
  src: "assets/images/my-new-photo.jpg",
  alt: "Describe what is visible in the photograph",
  meta: "Workshop · September 2026",
  featured: true
}
```

There is no upload dashboard: upload files and edit this list in the GitHub repository. Do not enter a computer path such as `C:\\...`; use the website paths shown above. The original three videos are also included directly in the HTML as a fallback for visitors with JavaScript disabled. If you need newly added items in that fallback as well, copy an existing media-card block in both `index.html` and `media/index.html` and update its links and text.

## Add a longer photo story

1. Upload a JPG or WebP photograph to `assets/images/`. Use a filename such as `training-2026.jpg`. Resize large photographs and remove location metadata before publishing.
2. Edit `photo-stories/index.html`. Find `<div class="photo-story-grid">`.
3. Paste the template below immediately after that line to place your new story first. You can also copy an existing complete `<article class="photo-story">...</article>` block.
4. Replace the example title, date, caption, paragraphs and both image paths. Set a unique article ID using lowercase letters and hyphens.
5. Set the image width and height to its actual pixel dimensions, and write useful alternative text describing the picture.
6. Commit the photo and page. Check the image, full-photograph link and expandable story after publishing.

```html
<article class="photo-story" id="training-2026">
  <figure>
    <a class="story-photo" href="/assets/images/training-2026.jpg"
       aria-label="View full photograph: Learning together">
      <img src="/assets/images/training-2026.jpg"
           alt="Describe the activity visible in the photograph"
           width="1600" height="1067" loading="lazy">
      <span aria-hidden="true">View photograph ↗</span>
    </a>
    <figcaption>Write a short factual caption.</figcaption>
  </figure>
  <div class="story-copy">
    <p class="eyebrow">September 2026 · Training &amp; knowledge sharing</p>
    <h2>Learning together</h2>
    <p>Write a short introduction to the occasion.</p>
    <details>
      <summary>Read the full story
        <span class="sr-only">: Learning together</span>
      </summary>
      <div class="story-expanded">
        <p>Describe your experience and personal reflection.</p>
        <p>Add another paragraph if needed.</p>
        <a class="story-permalink" href="#training-2026">Link to this story</a>
      </div>
    </details>
  </div>
</article>
```

This is a template, not an existing event or included image. Replace every example value. Use `&amp;` for ampersands. Do not place a new story inside another story's article or details element.

## Add a project

1. Create a new folder such as `case-studies/new-project/`. Copy a similar case study’s `index.html` into that folder.
2. Update its page title, description, canonical URL, Open Graph title/description/URL, heading, dates, role and project content. Keep HTML links rooted with `/`, for example `/projects/` and `/assets/images/photo.jpg`.
3. In `projects/index.html`, duplicate a complete `<article class="project-card">...</article>` inside the project grid. Update both links, image, title, organisation and summary.
4. Use an existing `data-category`: `systems`, `humanitarian`, `analytics`, `gis`, `research` or `capacity`.
5. Update the initial number beside `id="filter-status"`. Counts update automatically when someone selects a filter.
6. Add the new page URL to `sitemap.xml` as a `<url><loc>...</loc></url>` entry.
7. To feature the project on the homepage, update a card in `index.html` too.

## Other updates

### Publish a blog post

Your dedicated blog is **`/blog/`**, edited in **`blog/index.html`**. It is linked from the navigation and homepage. The featured Medium article remains an external article; its text is not copied into the website.

**To feature another Medium article:** copy an `<article class="blog-post">...</article>` block inside `<div class="blog-posts">`. Change its title, topic, short description and both links to the new article’s Medium URL. Commit the change.

**To write directly on this website:** create a folder such as `blog/my-new-article/`. Copy `insights/gis-health/index.html` into it as `index.html`, then replace the article heading, introduction, body, image and caption with your writing. Update the page title, meta description, canonical URL and Open Graph title/description/URL to describe your article at `https://seyiabolarin.github.io/blog/my-new-article/`. Add `aria-current="page"` to the Blog navigation link. Change the article’s back link to `/blog/` and label it “All blog posts”.

Add a card linking to `/blog/my-new-article/` in `blog/index.html`, and add the new URL to `sitemap.xml`. Only published articles should appear in the blog list. Keep unfinished drafts outside the published repository. GitHub Pages publishes your committed HTML; there is no writing dashboard or automatic Medium sync.

Example card (replace the sample content and link):

```html
<article class="blog-post">
  <p class="eyebrow">MEAL · PRACTICE NOTE</p>
  <h3><a href="/blog/my-new-article/">Your article title</a></h3>
  <p>A short introduction explaining what readers will learn.</p>
  <a class="text-link" href="/blog/my-new-article/">Read the article →</a>
</article>
```

### Other pages

- **Insights:** create a folder such as `insights/new-article/`, copy an existing article’s `index.html` into it, update the metadata and content, link it from `insights/index.html`, and add its clean URL to `sitemap.xml`.
- **Experience:** edit or duplicate a `<article class="timeline-row">` block in `experience/index.html`. Check print preview afterwards.
- **Existing stories:** edit their text and images in `photo-stories/index.html`. Stories on that same page do not require new sitemap entries.
- **Email or navigation:** update all occurrences across the HTML files, so every page stays consistent.
- **Appearance:** colours, fonts, spacing and responsive rules are in `assets/site.css`.

## Before publishing

### Replace the downloadable résumé

Upload your updated public PDF as `assets/seyi-abolarin-resume.pdf`, replacing the existing file. The homepage and Experience page already link to it using a download button. No PDF viewer is embedded. Keep sensitive personal details out of the public copy and check that the PDF remains consistent with your Experience page.

- Make small commits and keep a backup.
- Match filenames exactly: GitHub Pages paths are case-sensitive.
- Check links, photographs, mobile layout, story expansion and project filters.
- Keep image descriptions useful and publish only material you have permission to share.
- Do not change the Formspree endpoint unless you are replacing the form service.
- Refresh the live website after deployment. A hard refresh may be needed if styles are cached.
