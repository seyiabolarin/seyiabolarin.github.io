(() => {
  const posts = window.PORTFOLIO_POSTS;
  const grid = document.getElementById('journal-grid');
  if (!Array.isArray(posts) || !grid) return;
  const search = document.getElementById('post-search');
  const topic = document.getElementById('post-topic');
  const pagination = document.getElementById('post-pagination');
  const prev = document.getElementById('post-prev');
  const next = document.getElementById('post-next');
  const pageSize = 6;
  let page = 1;
  const escape = s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = s => {
    try { const u = new URL(s, location.origin); return ['https:', 'http:'].includes(u.protocol) ? escape(u.href) : '#'; } catch { return '#'; }
  };
  [...new Set(posts.map(p => p.topic))].sort().forEach(value => {
    const option = document.createElement('option'); option.value = value; option.textContent = value; topic.append(option);
  });
  function render(focus = false) {
    const query = search.value.trim().toLowerCase();
    const matches = posts.filter(p => (!topic.value || p.topic === topic.value) && `${p.title} ${p.excerpt} ${p.topic}`.toLowerCase().includes(query));
    const total = Math.max(1, Math.ceil(matches.length / pageSize));
    page = Math.min(page, total);
    grid.innerHTML = matches.slice((page - 1) * pageSize, page * pageSize).map(p => {
      const external = new URL(p.url, location.origin).origin !== location.origin;
      return `<article class="journal-card"><a class="journal-image" href="${safeURL(p.url)}" tabindex="-1" aria-hidden="true"><img src="${safeURL(p.image)}" alt="" width="1200" height="720" loading="lazy"></a><div class="journal-copy"><p class="eyebrow">${escape(p.topic)}</p><p class="post-meta">${escape(p.dateLabel)} · ${escape(p.meta)}</p><h2><a href="${safeURL(p.url)}">${escape(p.title)}</a></h2><p>${escape(p.excerpt)}</p><a class="text-link" href="${safeURL(p.url)}" aria-label="Read more: ${escape(p.title)}">${external ? 'Read on Medium ↗' : 'Read more →'}</a></div></article>`;
    }).join('');
    if (!matches.length) grid.innerHTML = '<p class="journal-empty">No articles match that search. Try another keyword or choose All topics.</p>';
    document.getElementById('post-count').textContent = `${matches.length} article${matches.length === 1 ? '' : 's'}${matches.length > pageSize ? ` · Showing ${(page-1)*pageSize+1}–${Math.min(page*pageSize,matches.length)}` : ''}`;
    pagination.hidden = total <= 1;
    document.getElementById('post-page').textContent = `Page ${page} of ${total}`;
    prev.disabled = page === 1; next.disabled = page === total;
    if (focus) { grid.tabIndex = -1; grid.focus(); grid.scrollIntoView({block:'start'}); }
  }
  search.addEventListener('input', () => { page = 1; render(); });
  topic.addEventListener('change', () => { page = 1; render(); });
  prev.addEventListener('click', () => { page--; render(true); });
  next.addEventListener('click', () => { page++; render(true); });
  document.getElementById('journal-tools').hidden = false;
  render();
})();
