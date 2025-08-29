// Šipka - backToTop

document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  const toggle = () => {
    const show = window.scrollY > 100;
    backToTop.classList.toggle('is-visible', show);
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
