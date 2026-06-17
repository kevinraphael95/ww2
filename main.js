// Expects EVENTS, YEARS, STATS to be defined in data.js loaded before this script

let activeFilter = 'all';
let searchQuery = '';
let observer;

(function initTheme() {
  const saved = localStorage.getItem('ww2-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  updateThemeIcon(theme);
})();

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('ww2-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const sun = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');
  if (!sun || !moon) return;
  sun.style.display = theme === 'dark' ? 'block' : 'none';
  moon.style.display = theme === 'light' ? 'block' : 'none';
}

function highlight(text, query) {
  if (!query) return text;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(safe, 'gi'), m => `<mark>${m}</mark>`);
}

function matchesSearch(ev) {
  if (!searchQuery) return true;
  const q = searchQuery.toLowerCase();
  return (
    ev.title.toLowerCase().includes(q) ||
    ev.detail.toLowerCase().includes(q) ||
    ev.stat.toLowerCase().includes(q) ||
    String(ev.year).includes(q) ||
    ev.dateShort.toLowerCase().includes(q)
  );
}

function iconClass(cat) {
  return { known: 'icon-known', rare: 'icon-rare', anecdote: 'icon-anec' }[cat];
}

function buildCard(ev) {
  const card = document.createElement('article');
  card.className = 'event-card';
  card.setAttribute('aria-expanded', 'false');
  const titleHL = highlight(ev.title, searchQuery);
  const detailHL = highlight(ev.detail, searchQuery);
  const statHL = highlight(ev.stat, searchQuery);
  card.innerHTML = `
    <div class="card-icon ${iconClass(ev.cat)}" aria-hidden="true">${ev.icon}</div>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-date">${ev.dateShort.toUpperCase()} ${ev.year}</span>
      </div>
      <h3 class="card-title">${titleHL}</h3>
      <div class="card-expand">
        <p class="card-detail">${detailHL}</p>
        <div class="card-footer">
          <span class="card-stat">${statHL}</span>
          <a class="card-wiki" href="${ev.wiki}" target="_blank" rel="noopener" aria-label="Lire sur Wikipedia">
            Wikipedia
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="card-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>`;
  card.addEventListener('click', function (e) {
    if (e.target.closest('a')) return;
    const isOpen = card.classList.toggle('is-open');
    card.setAttribute('aria-expanded', String(isOpen));
    card.querySelector('.card-expand').classList.toggle('open', isOpen);
    if (isOpen) {
      document.querySelectorAll('.event-card.is-open').forEach(other => {
        if (other === card) return;
        other.classList.remove('is-open');
        other.setAttribute('aria-expanded', 'false');
        other.querySelector('.card-expand').classList.remove('open');
      });
    }
  });
  return card;
}

function buildYearBlock(year, events) {
  const block = document.createElement('section');
  block.className = 'year-block';
  block.dataset.year = year;
  const marker = document.createElement('div');
  marker.className = 'year-marker';
  marker.setAttribute('aria-label', `Année ${year}`);
  marker.innerHTML = `<div class="year-badge">${year}</div>`;
  block.appendChild(marker);
  events.forEach(ev => block.appendChild(buildCard(ev)));
  return block;
}

function render() {
  const root = document.getElementById('timeline-root');
  root.innerHTML = '';
  const filtered = EVENTS.filter(ev => {
    const catOk = activeFilter === 'all' || ev.cat === activeFilter;
    const searchOk = matchesSearch(ev);
    return catOk && searchOk;
  });
  document.getElementById('event-count').textContent = filtered.length + ' événement' + (filtered.length > 1 ? 's' : '');
  if (filtered.length === 0) {
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.textContent = 'Aucun événement trouvé pour cette recherche.';
    root.appendChild(msg);
    return;
  }
  const byYear = {};
  filtered.forEach(ev => {
    if (!byYear[ev.year]) byYear[ev.year] = [];
    byYear[ev.year].push(ev);
  });
  YEARS.forEach(yr => {
    if (!byYear[yr]) return;
    root.appendChild(buildYearBlock(yr, byYear[yr]));
  });
  observeBlocks();
}

function setFilter(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active', 'active-known', 'active-rare', 'active-anec');
  });
  if (cat === 'all') { btn.classList.add('active'); }
  else { const map = { known: 'active-known', rare: 'active-rare', anecdote: 'active-anec' }; btn.classList.add(map[cat]); }
  render();
}

function observeBlocks() {
  if (observer) observer.disconnect();
  const blocks = document.querySelectorAll('.year-block');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    blocks.forEach(b => b.classList.add('visible')); return;
  }
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.04, rootMargin: '0px 0px -30px 0px' });
  blocks.forEach(b => observer.observe(b));
}

function init() {
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter, btn));
  });
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  let searchTimeout;
  searchInput.addEventListener('input', function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = this.value.trim();
      searchClear.classList.toggle('visible', searchQuery.length > 0);
      render();
    }, 200);
  });
  searchClear.addEventListener('click', function () {
    searchInput.value = ''; searchQuery = '';
    this.classList.remove('visible');
    searchInput.focus(); render();
  });
  render();
}

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
