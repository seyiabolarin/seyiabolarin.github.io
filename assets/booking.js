(() => {
  const link = document.getElementById('booking-link');
  if (!link || !window.PORTFOLIO_BOOKING_URL) return;
  try {
    const url = new URL(window.PORTFOLIO_BOOKING_URL);
    if (url.protocol !== 'https:') return;
    link.href = url.href; link.textContent = 'Choose an available time ↗';
    document.getElementById('booking-status').textContent = 'Book a 30-minute introductory conversation. Available Fridays, 3–7 pm, and Saturdays, 10 am–5 pm West Africa Time (UTC+1). The calendar shows times in your local time zone.';
    document.getElementById('booking-note').textContent = 'Scheduling opens on Calendly. Online meeting joining details will be shared by email before the meeting. Calendly’s privacy policy applies.';
  } catch { /* Keep the working email alternative if the link is incomplete. */ }
})();
