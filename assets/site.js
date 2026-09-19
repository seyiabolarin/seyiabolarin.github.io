(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const smallScreen = window.matchMedia('(max-width: 1100px)');
  function syncMenu() {
    menu.hidden = !smallScreen.matches;
    nav.classList.toggle('collapsed', smallScreen.matches);
    menu.setAttribute('aria-expanded', 'false');
  }
  syncMenu();
  smallScreen.addEventListener('change', syncMenu);
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('collapsed', !open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && smallScreen.matches && menu.getAttribute('aria-expanded') === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.add('collapsed');
      menu.focus();
    }
  });
  const filters = document.querySelector('.filters');
  if (filters) {
    filters.hidden = false;
    const cards = [...document.querySelectorAll('[data-category]')];
    filters.addEventListener('click', event => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
      const count = cards.filter(card => !card.hidden).length;
      document.querySelector('#filter-status').textContent = `${count} case ${count === 1 ? 'study' : 'studies'}`;
    });
  }
  const printButton = document.querySelector('[data-print]');
  if (printButton) { printButton.hidden = false; printButton.addEventListener('click', () => window.print()); }
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const button = form.querySelector('[type="submit"]');
      const status = document.querySelector('#form-status');
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      button.disabled = true;
      status.textContent = 'Sending your message…';
      try {
        const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: controller.signal });
        if (!response.ok) throw new Error('Submission failed');
        status.textContent = 'Thank you — your message has been sent.';
        document.dispatchEvent(new Event('portfolio:contact-sent'));
        form.reset();
      } catch (_) {
        status.textContent = 'Your message could not be sent. Your text is still here. Please try again or email seyiabolarin@outlook.com.';
      } finally {
        clearTimeout(timeout);
        button.disabled = false;
      }
    });
  }
})();


// Load the shared preference and measurement controls on every content page.
(() => {
  const script = document.createElement('script');
  script.src = '/assets/analytics.js?v=20260919-1';
  script.defer = true;
  document.head.appendChild(script);
})();
