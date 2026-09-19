/* Portfolio measurement: Google Analytics loads only after an explicit opt-in. */
(() => {
  'use strict';
  const ID = 'G-SF1LP9QV0B';
  const HOST = 'seyiabolarin.github.io';
  const KEY = 'portfolio-analytics-choice-v1';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  if (location.hostname !== HOST || !/^G-[A-Z0-9]+$/.test(ID)) return;
  let permitted = false;
  let loaded = false;
  let previousFocus;
  let choice;
  try {
    const stored = JSON.parse(localStorage.getItem(KEY));
    if (stored && Date.now() - stored.time < MAX_AGE) choice = stored.value;
  } catch (_) { /* Storage may be unavailable; the current visit still works. */ }

  function pageLocation() {
    const url = new URL(location.origin + location.pathname);
    const current = new URL(location.href);
    // Only public campaign labels are retained. Never transmit arbitrary query fields.
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach(key => {
      const value = current.searchParams.get(key);
      if (value && /^[a-zA-Z0-9_.-]{1,80}$/.test(value)) url.searchParams.set(key, value);
    });
    return url.href;
  }
  function referrer() {
    try {
      const url = new URL(document.referrer);
      return url.origin === location.origin ? url.origin + url.pathname : url.origin + '/';
    } catch (_) { return ''; }
  }
  function send(name, parameters = {}) {
    if (!permitted || !loaded) return;
    window.gtag('event', name, { page_path: location.pathname, ...parameters });
  }
  function start() {
    permitted = true;
    window['ga-disable-' + ID] = false;
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', ID, {
      page_location: pageLocation(), page_referrer: referrer(),
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_domain: HOST, cookie_expires: 15552000
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(tag);
  }
  function clearAnalyticsCookies() {
    document.cookie.split(';').forEach(item => {
      const name = item.split('=')[0].trim();
      if (!/^_ga(?:_|$)|^_gid$|^_gat/.test(name)) return;
      ['', ';domain=' + HOST, ';domain=.' + HOST].forEach(domain => {
        document.cookie = name + '=;max-age=0;path=/' + domain + ';SameSite=Lax;Secure';
      });
    });
  }
  const style = document.createElement('link');
  style.rel = 'stylesheet'; style.href = '/assets/analytics.css?v=20260920-1';
  document.head.appendChild(style);
  const panel = document.createElement('section');
  panel.className = 'analytics-consent';
  panel.setAttribute('aria-label', 'Optional analytics');
  panel.hidden = true;
  panel.innerHTML = '<div><h2>Optional visitor analytics</h2><p>Allow Google Analytics cookies to measure visits and improve this portfolio? Your choice will not affect access. <a href="/privacy/#analytics">Privacy details</a>.</p></div><div class="analytics-actions"><button type="button" data-choice="denied">No thanks</button><button type="button" data-choice="granted">Allow analytics</button><button type="button" data-close hidden>Close</button></div>';
  document.body.prepend(panel);
  const settings = document.createElement('button');
  settings.type = 'button'; settings.className = 'analytics-settings';
  settings.textContent = 'Analytics preferences';
  (document.querySelector('.footer-bottom') || document.body).appendChild(settings);
  settings.addEventListener('click', () => {
    previousFocus = document.activeElement;
    panel.hidden = false;
    panel.querySelector('[data-close]').hidden = false;
    panel.querySelector('[data-choice]').focus();
    panel.scrollIntoView({ block: 'start', behavior: 'instant' });
  });
  function close() {
    panel.hidden = true;
    if (previousFocus) previousFocus.focus();
  }
  panel.querySelector('[data-close]').addEventListener('click', close);
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
  });
  panel.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
    choice = button.dataset.choice;
    try { localStorage.setItem(KEY, JSON.stringify({ value: choice, time: Date.now() })); } catch (_) {}
    close();
    if (choice === 'granted') start();
    else {
      permitted = false;
      window['ga-disable-' + ID] = true;
      clearAnalyticsCookies();
      // Unload an already-running tag when consent is withdrawn.
      if (loaded) location.reload();
    }
  }));
  if (choice === 'granted') start();
  else if (choice !== 'denied') panel.hidden = false;

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    let url;
    try { url = new URL(link.href); } catch (_) { return; }
    if (url.protocol === 'mailto:') send('contact_email_click');
    else if (url.hostname === 'calendly.com') send('booking_click', { booking_provider: 'calendly' });
    else if (url.origin === location.origin && url.pathname.endsWith('/seyi-abolarin-resume.pdf')) send('resume_download');
    else if (url.origin === location.origin && url.pathname === '/contact/') send('contact_page_click');
    else if (url.origin === location.origin && /\/assets\/downloads\/.*\.zip$/.test(url.pathname)) send('code_download');
  });
  // Called only after the contact service confirms successful submission.
  document.addEventListener('portfolio:contact-sent', () => send('generate_lead', { method: 'contact_form' }));
  const article = document.querySelector('article.article-body');
  if (article && document.querySelector('.article-header')) {
    const reached = new Set();
    let scheduled = false;
    const check = () => {
      scheduled = false;
      if (!permitted || document.visibilityState !== 'visible') return;
      const bounds = article.getBoundingClientRect();
      const fraction = (innerHeight - bounds.top) / Math.max(bounds.height, 1);
      [25, 50, 75, 90].forEach(percent => {
        if (fraction >= percent / 100 && !reached.has(percent)) {
          reached.add(percent);
          send('article_scroll', { percent_scrolled: percent });
        }
      });
    };
    window.addEventListener('scroll', () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(check); }
    }, { passive: true });
  }
})();
