document.addEventListener('DOMContentLoaded', function() {

// ─── SVG FLAGS ────────────────────────────────────────────
const SVG_CO = `<svg width="28" height="18" viewBox="0 0 28 18" xmlns="http://www.w3.org/2000/svg">
  <rect y="0"    width="28" height="9"   fill="#FCD116"/>
  <rect y="9"    width="28" height="4.5" fill="#003893"/>
  <rect y="13.5" width="28" height="4.5" fill="#CE1126"/>
</svg>`;

const SVG_US = `<svg width="28" height="18" viewBox="0 0 28 18" xmlns="http://www.w3.org/2000/svg">
  <rect width="28" height="18" fill="#B22234"/>
  <rect y="1.38"  width="28" height="1.38" fill="#fff"/>
  <rect y="4.15"  width="28" height="1.38" fill="#fff"/>
  <rect y="6.92"  width="28" height="1.38" fill="#fff"/>
  <rect y="9.69"  width="28" height="1.38" fill="#fff"/>
  <rect y="12.46" width="28" height="1.38" fill="#fff"/>
  <rect y="15.23" width="28" height="1.38" fill="#fff"/>
  <rect width="11" height="9.69" fill="#3C3B6E"/>
  <g fill="white">
    <circle cx="1.8" cy="1.2" r=".7"/><circle cx="3.6" cy="1.2" r=".7"/><circle cx="5.4" cy="1.2" r=".7"/><circle cx="7.2" cy="1.2" r=".7"/><circle cx="9" cy="1.2" r=".7"/>
    <circle cx="2.7" cy="2.7" r=".7"/><circle cx="4.5" cy="2.7" r=".7"/><circle cx="6.3" cy="2.7" r=".7"/><circle cx="8.1" cy="2.7" r=".7"/>
    <circle cx="1.8" cy="4.2" r=".7"/><circle cx="3.6" cy="4.2" r=".7"/><circle cx="5.4" cy="4.2" r=".7"/><circle cx="7.2" cy="4.2" r=".7"/><circle cx="9" cy="4.2" r=".7"/>
    <circle cx="2.7" cy="5.7" r=".7"/><circle cx="4.5" cy="5.7" r=".7"/><circle cx="6.3" cy="5.7" r=".7"/><circle cx="8.1" cy="5.7" r=".7"/>
    <circle cx="1.8" cy="7.2" r=".7"/><circle cx="3.6" cy="7.2" r=".7"/><circle cx="5.4" cy="7.2" r=".7"/><circle cx="7.2" cy="7.2" r=".7"/><circle cx="9" cy="7.2" r=".7"/>
    <circle cx="2.7" cy="8.7" r=".7"/><circle cx="4.5" cy="8.7" r=".7"/><circle cx="6.3" cy="8.7" r=".7"/><circle cx="8.1" cy="8.7" r=".7"/>
  </g>
</svg>`;

// ─── SVG MOON / SUN ──────────────────────────────────────
const SVG_MOON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 10A6 6 0 0 1 6 2.5a.5.5 0 0 0-.6-.6A6.5 6.5 0 1 0 14.1 10.6a.5.5 0 0 0-.6-.6z" fill="currentColor"/>
</svg>`;

const SVG_SUN = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="3" fill="currentColor"/>
  <line x1="8" y1="1" x2="8" y2="3.5"   stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="8" y1="12.5" x2="8" y2="15"  stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="1" y1="8" x2="3.5" y2="8"   stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="12.5" y1="8" x2="15" y2="8"  stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="3.2" y1="3.2" x2="5" y2="5"  stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="11" y1="11" x2="12.8" y2="12.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="12.8" y1="3.2" x2="11" y2="5"   stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="5" y1="11" x2="3.2" y2="12.8"   stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;

// ─── TRANSLATIONS ─────────────────────────────────────────
const T = {
  es: {
    "nav.about":"Sobre mí","nav.blog":"Blog","nav.projects":"Proyectos","nav.academy":"Academia",
    "hero.tag":"Bogotá, Colombia",
    "hero.bio":"Economista en la intersección de política pública, inteligencia artificial y desarrollo territorial. Con punto de vista propio y preguntas difíciles.",
    "role.creative":"Creativo",
    "photo.label":"Foto",
    "section.projects":"Proyectos recientes","section.blog":"Últimas entradas de blog",
    "footer.tagline":"Persona · Investigador",
    "about.title":"Sobre mí",
    "about.exp":"Experiencia",
    "about.edu":"Educación",
    "about.skills":"Skills",
    "academia.title":"Academia",
    "academia.pub":"Publicaciones",
    "academia.courses":"Cursos impartidos",
    "academia.material":"Material",
    "blog.all":"Todas las entradas",
    "projects.all":"Todos los proyectos",
    "read.more":"Leer más →",
    "view.project":"Ver proyecto →",
  },
  en: {
    "nav.about":"About","nav.blog":"Blog","nav.projects":"Projects","nav.academy":"Teaching",
    "hero.tag":"Bogotá, Colombia",
    "hero.bio":"Economist at the intersection of public policy, artificial intelligence and territorial development. With my own perspective and hard questions.",
    "role.creative":"Creative",
    "photo.label":"Photo",
    "section.projects":"Recent projects","section.blog":"Latest blog posts",
    "footer.tagline":"Person · Researcher",
    "about.title":"About me",
    "about.exp":"Experience",
    "about.edu":"Education",
    "about.skills":"Skills",
    "academia.title":"Teaching & Research",
    "academia.pub":"Publications",
    "academia.courses":"Courses taught",
    "academia.material":"Materials",
    "blog.all":"All posts",
    "projects.all":"All projects",
    "read.more":"Read more →",
    "view.project":"View project →",
  }
};

let lang  = localStorage.getItem('lang')  || 'es';
let theme = localStorage.getItem('theme') || 'light';

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v) el.textContent = v;
    else if (l === 'en' && el.dataset.labelEn) el.textContent = el.dataset.labelEn;
  });
  // Pills y otros elementos sin data-i18n pero con data-label-en
  document.querySelectorAll('[data-label-en]:not([data-i18n])').forEach(el => {
    el.textContent = l === 'en' ? el.dataset.labelEn : el.dataset.labelEs || el.dataset.labelEn;
  });
  const lb = document.getElementById('langBtn');
  if (lb) lb.textContent = l === 'es' ? 'EN' : 'ES';
  localStorage.setItem('lang', l);
}

function toggleLang() { applyLang(lang === 'es' ? 'en' : 'es'); }
window.toggleLang = toggleLang;

function applyTheme(t) {
  theme = t;
  document.documentElement.setAttribute('data-theme', t);
  const tb = document.getElementById('themeBtn');
  if (tb) tb.innerHTML = t === 'light' ? SVG_MOON : SVG_SUN;
  localStorage.setItem('theme', t);
}

function toggleTheme() { applyTheme(theme === 'light' ? 'dark' : 'light'); }
window.toggleTheme = toggleTheme;

function toggleMenu() {
  const mm = document.getElementById('mobileMenu');
  const hb = document.getElementById('hamburger');
  if (mm) mm.classList.toggle('open');
  if (hb) hb.classList.toggle('open');
}
window.toggleMenu = toggleMenu;

// ─── SEARCH ───────────────────────────────────────────────
let searchData = null;

async function loadSearchData() {
  if (searchData !== null) return searchData;
  try {
    const r = await fetch('/search.json');
    searchData = await r.json();
  } catch(e) {
    searchData = [];
  }
  return searchData;
}

function performSearch(query) {
  if (!query.trim() || !searchData) return [];
  const q = query.toLowerCase().trim();
  return searchData.filter(item =>
    (item.title  && item.title.toLowerCase().includes(q))  ||
    (item.excerpt && item.excerpt.toLowerCase().includes(q)) ||
    (item.category && item.category.toLowerCase().includes(q))
  ).slice(0, 8);
}

function renderResults(results, query) {
  const container = document.getElementById('searchResults');
  if (!container) return;
  if (!query.trim()) { container.innerHTML = ''; return; }
  if (results.length === 0) {
    container.innerHTML = `<p class="search-no-results">Sin resultados para "${query}"</p>`;
    return;
  }
  container.innerHTML = results.map(r => {
    const typeLabel = r.type === 'post' ? (r.tipo || 'pro') : (r.category || 'Proyecto');
    const typeClass = r.tipo || r.type;
    const excerpt   = r.excerpt ? r.excerpt.substring(0, 90) + '…' : '';
    const meta      = r.date ? ` · ${r.date}` : '';
    return `<a href="${r.url}" class="search-result-item">
      <span class="search-result-type ${typeClass}">${typeLabel}${meta}</span>
      <span class="search-result-title">${r.title}</span>
      ${excerpt ? `<span class="search-result-excerpt">${excerpt}</span>` : ''}
    </a>`;
  }).join('');
}

function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.toggle('open');
  if (overlay.classList.contains('open')) {
    loadSearchData(); // precarga en cuanto abre
    setTimeout(() => {
      const inp = document.getElementById('searchInput');
      if (inp) { inp.focus(); inp.value = ''; }
      const container = document.getElementById('searchResults');
      if (container) container.innerHTML = '';
    }, 50);
  }
}
window.toggleSearch = toggleSearch;

function closeSearch(e) {
  const overlay = document.getElementById('searchOverlay');
  if (overlay && e.target === overlay) overlay.classList.remove('open');
}
window.closeSearch = closeSearch;

// Input: buscar en tiempo real
document.addEventListener('input', e => {
  if (e.target.id !== 'searchInput') return;
  const results = performSearch(e.target.value);
  renderResults(results, e.target.value);
});

// Enter: ir al primer resultado
document.addEventListener('keydown', e => {
  const overlay = document.getElementById('searchOverlay');
  if (e.key === 'Escape' && overlay) overlay.classList.remove('open');
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); toggleSearch(); }
  if (e.key === 'Enter' && document.activeElement.id === 'searchInput') {
    const first = document.querySelector('.search-result-item');
    if (first) { first.click(); overlay.classList.remove('open'); }
  }
});

// ─── SCROLL REVEAL ────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── ACTIVE NAV LINK ──────────────────────────────────────
const path = window.location.pathname;
document.querySelectorAll('.nav-item > a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href && href !== '/' && path.startsWith(href)) {
    a.classList.add('active');
  } else if (href === '/' && path === '/') {
    a.classList.add('active');
  }
});

// ─── INIT ─────────────────────────────────────────────────
applyLang(lang);
applyTheme(theme);

}); // end DOMContentLoaded
