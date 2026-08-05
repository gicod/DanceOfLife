(function() {

/* ========== SVG-иконки (не являются текстами, поэтому здесь) ========== */
const ICONS = {
  spark: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/></svg>',
  users: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  heart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  music: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  pin:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
};

/* ========== Чтение переменной по пути вида "hero.title" ========== */
const t = path => path.split('.').reduce((o, k) => (o ?? {})[k], CONTENT);
const render = (sel, html) => { const el = document.querySelector(sel); if (el) el.innerHTML = html; };

/* ========== 1. Подстановка всех текстов из content.js ========== */
function applyTexts() {
  document.title = CONTENT.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', CONTENT.meta.description);

  document.querySelectorAll('[data-t]').forEach(el => {
    const v = t(el.dataset.t);
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const v = t(el.dataset.tPlaceholder);
    if (v != null) el.placeholder = v;
  });
  const tgBtn = document.getElementById('tgBtn');
  if (tgBtn) tgBtn.href = CONTENT.contact.telegramUrl;
  const headerTgLink = document.getElementById('headerTgLink');
  if (headerTgLink) headerTgLink.href = CONTENT.contact.telegramUrl;
}

/* ========== 2. Отрисовка списков (меню, карточки, расписание, отзывы) ========== */
function renderLists() {
  render('#navList', CONTENT.nav.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join(''));
  render('#mobileNav', CONTENT.nav.map(i => `<a href="${i.href}">${i.label}</a>`).join('')
    + `<a href="#contact" class="cta">${CONTENT.mobileCta}</a>`);
  render('#heroStats', CONTENT.hero.stats.map(s => `<div><b>${s.value}</b><span>${s.label}</span></div>`).join(''));
  render('#cards', CONTENT.about.cards.map(c => `
    <div class="card reveal">
      <div class="icon">${ICONS[c.icon] || ''}</div>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </div>`).join(''));
  render('#schedList', CONTENT.schedule.rows.map(r => `
    <div class="sched-row reveal">
      <div class="sched-info"><h3>${r.title}</h3><span class="badge">${r.badge}</span></div>
      <div class="sched-when"><span class="days">${r.days}</span><span class="time">${r.time}</span></div>
    </div>`).join(''));
  render('#sliderTrack', CONTENT.reviews.items.map(r => `
    <article class="slide">
      <div class="quote-mark">“</div>
      <blockquote>“${r.text}”</blockquote>
      <div class="author"><span class="avatar">${r.initials}</span><div><b>${r.name}</b><span>${r.meta}</span></div></div>
    </article>`).join(''));
  render('#footerNav', CONTENT.nav.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join(''));
  render('#footerContacts', `
    <li>${ICONS.pin}${CONTENT.contact.address}</li>
    <li>${ICONS.phone}${CONTENT.contact.phone}</li>
    <li>${ICONS.mail}${CONTENT.contact.email}</li>`);
}

/* ========== 3. Шапка при скролле ========== */
const header = document.getElementById('header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10));

/* ========== 4. Мобильное меню ========== */
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});
mobileNav.addEventListener('click', e => {
  if (e.target.closest('a')) { mobileNav.classList.remove('open'); burger.classList.remove('open'); }
});

/* ========== 5. Слайдер отзывов ========== */
const track = document.getElementById('sliderTrack');
const dotsBox = document.getElementById('dots');
let idx = 0, auto;

function go(n) {
  const total = track.children.length;
  idx = (n + total) % total;
  track.style.transform = 'translateX(-' + idx * 100 + '%)';
  [...dotsBox.children].forEach((d, i) => d.classList.toggle('active', i === idx));
}
function restart() { clearInterval(auto); auto = setInterval(() => go(idx + 1), 6000); }

function initSlider() {
  dotsBox.innerHTML = '';
  [...track.children].forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.setAttribute('aria-label', 'Отзыв ' + (i + 1));
    d.addEventListener('click', () => { go(i); restart(); });
    dotsBox.appendChild(d);
  });
  go(0); restart();

  /* свайпы на телефоне */
  let startX = null;
  const slider = document.getElementById('slider');
  slider.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
  slider.addEventListener('touchend', e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) { go(idx + (dx < 0 ? 1 : -1)); restart(); }
    startX = null;
  }, { passive: true });
}

/* ========== 6. Появление блоков при скролле ========== */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }), { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ========== 7. Маска телефона ========== */
const phone = document.getElementById('phone');
phone.addEventListener('input', () => {
  let d = phone.value.replace(/\D/g, '');
  if (!d) { phone.value = ''; return; }
  if (d[0] === '8') d = '7' + d.slice(1);
  if (d[0] !== '7') d = '7' + d;
  d = d.slice(0, 11);
  let out = '+7';
  const r = d.slice(1);
  if (r.length > 0) out += ' (' + r.slice(0, 3);
  if (r.length >= 3) out += ')';
  if (r.length > 3) out += ' ' + r.slice(3, 6);
  if (r.length > 6) out += '-' + r.slice(6, 8);
  if (r.length > 8) out += '-' + r.slice(8, 10);
  phone.value = out;
});

/* ========== 8. Отправка формы ========== */
const form = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name');
  const digits = phone.value.replace(/\D/g, '');
  let ok = true;
  [name, phone].forEach(f => f.classList.remove('invalid'));
  if (!name.value.trim()) { name.classList.add('invalid'); ok = false; }
  if (digits.length !== 11) { phone.classList.add('invalid'); ok = false; }
  if (!ok) return;

  submitBtn.textContent = CONTENT.contact.form.success;
  submitBtn.classList.add('sent');
  submitBtn.disabled = true;
  form.reset();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = CONTENT.contact.form.toast;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 4000);
});
document.querySelectorAll('#leadForm input').forEach(f =>
  f.addEventListener('input', () => f.classList.remove('invalid')));

/* ========== СТАРТ ========== */
applyTexts();
renderLists();
initSlider();
initReveal();

})();