/* =============================================
   WW2 TIMELINE — app.js
   ============================================= */

(function () {
  'use strict';

  /* ─── state ─── */
  let activeFilter = 'all';

  /* ─── helpers ─── */
  function iconClass(cat) {
    return { known: 'icon-known', rare: 'icon-rare', anecdote: 'icon-anec' }[cat];
  }
  function badgeClass(cat) {
    return { known: 'badge-known', rare: 'badge-rare', anecdote: 'badge-anec' }[cat];
  }
  function badgeLabel(cat) {
    return { known: 'Histoire officielle', rare: 'Peu connu', anecdote: 'Anecdote' }[cat];
  }

  /* ─── build one card ─── */
  function buildCard(ev) {
    const card = document.createElement('article');
    card.className = 'event-card';
    card.setAttribute('aria-expanded', 'false');

    card.innerHTML = `
      <div class="card-icon ${iconClass(ev.cat)}">${ev.icon}</div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-date">${ev.dateShort.toUpperCase()}&nbsp;${ev.year}</span>
          <span class="card-badge ${badgeClass(ev.cat)}">${badgeLabel(ev.cat)}</span>
        </div>
        <h3 class="card-title">${ev.title}</h3>
        <div class="card-expand">
          <p class="card-detail">${ev.detail}</p>
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0;margin-top:6px;">
            <span class="card-stat">${ev.stat}</span>
            <a class="card-wiki" href="${ev.wiki}" target="_blank" rel="noopener">
              Wikipedia
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="card-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    `;

    /* toggle expand */
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // laisser le lien wiki fonctionner
      const isOpen = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', String(isOpen));
      card.querySelector('.card-expand').classList.toggle('open', isOpen);
    });

    return card;
  }

  /* ─── build one year block ─── */
  function buildYearBlock(year, events) {
    const block = document.createElement('section');
    block.className = 'year-block';
    block.dataset.year = year;

    block.innerHTML = `
      <div class="year-marker" aria-label="Année ${year}">
        <div class="year-badge">${year}</div>
      </div>
    `;

    events.forEach(ev => block.appendChild(buildCard(ev)));
    return block;
  }

  /* ─── render timeline ─── */
  function render() {
    const root = document.getElementById('timeline-root');
    root.innerHTML = '';

    const filtered = EVENTS.filter(
      ev => activeFilter === 'all' || ev.cat === activeFilter
    );

    // compte
    document.getElementById('event-count').textContent =
      filtered.length + ' événement' + (filtered.length > 1 ? 's' : '');

    // grouper par année
    const byYear = {};
    filtered.forEach(ev => {
      if (!byYear[ev.year]) byYear[ev.year] = [];
      byYear[ev.year].push(ev);
    });

    YEARS.forEach(yr => {
      if (!byYear[yr]) return;
      const block = buildYearBlock(yr, byYear[yr]);
      root.appendChild(block);
    });

    // déclencher scroll reveal
    observeBlocks();
  }

  /* ─── filtres ─── */
  function setFilter(cat, btn) {
    activeFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active', 'active-known', 'active-rare', 'active-anec');
    });
    if (cat === 'all') {
      btn.classList.add('active');
    } else {
      const map = { known: 'active-known', rare: 'active-rare', anecdote: 'active-anec' };
      btn.classList.add(map[cat]);
    }
    render();
  }

  /* ─── scroll reveal via IntersectionObserver ─── */
  let observer;
  function observeBlocks() {
    if (observer) observer.disconnect();

    const blocks = document.querySelectorAll('.year-block');

    // si l'utilisateur préfère pas d'animation, tout visible immédiatement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      blocks.forEach(b => b.classList.add('visible'));
      return;
    }

    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    blocks.forEach(b => observer.observe(b));
  }

  /* ─── init ─── */
  function init() {
    // KPI
    document.getElementById('kpi-victims').textContent = STATS.total;
    document.getElementById('kpi-duration').textContent = STATS.duration;
    document.getElementById('kpi-nations').textContent = STATS.nations;

    // filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => setFilter(btn.dataset.filter, btn));
    });

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
