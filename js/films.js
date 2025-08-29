const selectEl = document.getElementById('movie-select');
const resultsEl = document.getElementById('results');
const API_BASE = 'https://api.tvmaze.com/search/shows?q=';

if (selectEl && resultsEl) {
  selectEl.addEventListener('change', onChange);
}

async function onChange() {
  const q = selectEl.value.trim();
  if (!q) return;

  resultsEl.innerHTML = '<p class="status">Načítám…</p>';

  try {
    const res = await fetch(API_BASE + encodeURIComponent(q));
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      resultsEl.innerHTML = '<p>Nic nenalezeno.</p>';
      return;
    }

    const html = data
      .map(({ show }) => {
        const img = show?.image?.medium || show?.image?.original;
        return img
          ? `<img class="poster" src="${img}" alt="Plakát: ${
              show?.name ?? ''
            }" loading="lazy">`
          : '';
      })
      .join('');

    resultsEl.innerHTML = `<div class="grid">${html}</div>`;
  } catch (err) {
    console.error(err);
    resultsEl.innerHTML = `<p class="error">Chyba: ${err.message}</p>`;
  }
}
