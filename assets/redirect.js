(() => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) return;
  const destination = new URL(canonical.href);
  location.replace(destination.pathname + location.search + location.hash);
})();
