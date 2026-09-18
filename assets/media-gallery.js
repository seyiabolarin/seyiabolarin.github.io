(() => {
  'use strict';
  const items = window.PORTFOLIO_MEDIA;
  if (!Array.isArray(items)) return;
  const safePath = value => typeof value === 'string' && /^assets\/[a-zA-Z0-9_./-]+$/.test(value) && !value.includes('..');
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  document.querySelectorAll('[data-media-gallery]').forEach(gallery => {
    const selected = items.filter(item => item && safePath(item.src) && ['video', 'image'].includes(item.type) && (gallery.dataset.mediaGallery !== 'featured' || item.featured === true));
    const fragment = document.createDocumentFragment();
    selected.forEach((item, index) => {
      const card = element('article', 'media-card');
      card.id = 'media-' + String(item.id || index).replace(/[^a-zA-Z0-9_-]/g, '-');
      const titleId = card.id + '-title';
      let media;
      if (item.type === 'video') {
        media = element('video', 'media-player');
        media.controls = true;
        media.playsInline = true;
        media.preload = 'none';
        if (safePath(item.poster)) media.poster = "/" + item.poster;
        media.setAttribute('aria-labelledby', titleId);
        const source = element('source');
        source.src = "/" + item.src;
        source.type = item.src.endsWith('.webm') ? 'video/webm' : 'video/mp4';
        media.append(source);
        if (safePath(item.captions)) {
          const track = element('track');
          track.kind = 'captions'; track.src = "/" + item.captions;
          track.srclang = item.captionLanguage || 'en';
          track.label = item.captionLabel || 'English'; track.default = true;
          media.append(track);
        }
        const fallback = element('a', '', 'Open the video'); fallback.href = "/" + item.src; media.append(fallback);
        media.addEventListener('play', () => document.querySelectorAll('video').forEach(other => { if (other !== media) other.pause(); }));
      } else {
        media = element('a', 'media-photo'); media.href = "/" + item.src;
        const img = element('img'); img.src = "/" + item.src; img.alt = item.alt || item.title || 'Media photograph'; img.loading = 'lazy';
        media.append(img);
      }
      card.append(media);
      const copy = element('div', 'media-copy');
      copy.append(element('p', 'eyebrow', item.meta || (item.type === 'video' ? 'VIDEO' : 'PHOTO')));
      const heading = element('h3', '', item.title || 'Media'); heading.id = titleId;
      copy.append(heading, element('p', '', item.description || ''));
      const download = element('a', 'text-link', item.type === 'video' ? 'Open / download video ↗' : 'View full photograph ↗'); download.href = "/" + item.src;
      copy.append(download);card.append(copy);fragment.append(card);
    });
    if (selected.length) gallery.replaceChildren(fragment);
  });
})();
