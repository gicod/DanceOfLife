(function () {
  /* ========== SVG-иконки ========== */
  const ICONS = {
    spark:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/></svg>',
    users:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    heart:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    music:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.1L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    telegram:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
    instagram:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    vk: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.457 2.27 4.607 2.863 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.58.744z"/></svg>',
  };

  /* ========== Чтение переменной по пути вида "hero.title" ========== */
  const t = (path) => path.split(".").reduce((o, k) => (o ?? {})[k], CONTENT);
  const render = (sel, html) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  };

  /* ========== 1. Подстановка всех текстов из content.js ========== */
  function applyTexts() {
    document.title = CONTENT.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", CONTENT.meta.description);
    document.querySelectorAll("[data-t]").forEach((el) => {
      const v = t(el.dataset.t);
      if (v != null) el.innerHTML = v;
    });
  }

  /* ========== 2. Отрисовка списков (меню, карточки, расписание, отзывы) ========== */
  function renderLists() {
    render(
      "#navList",
      CONTENT.nav
        .map((i) => `<li><a href="${i.href}">${i.label}</a></li>`)
        .join(""),
    );
    /* CTA в мобильном меню тоже ведёт в Telegram */
    render(
      "#mobileNav",
      CONTENT.nav.map((i) => `<a href="${i.href}">${i.label}</a>`).join("") +
        `<a href="#" data-tg class="cta">${ICONS.telegram}<span>${CONTENT.mobileCta}</span></a>`,
    );
    render(
      "#heroStats",
      CONTENT.hero.stats
        .map((s) => `<div><b>${s.value}</b><span>${s.label}</span></div>`)
        .join(""),
    );
    render(
      "#cards",
      CONTENT.about.cards
        .map(
          (c) =>
            `<div class="card reveal"> <div class="icon">${ICONS[c.icon] || ""}</div> <h3>${c.title}</h3> <p>${c.text}</p> </div>`,
        )
        .join(""),
    );
    render(
      "#schedList",
      CONTENT.schedule.rows
        .map(
          (r) =>
            `<div class="sched-row reveal"> <div class="sched-info"><h3>${r.title}</h3><span class="badge">${r.badge}</span></div> <div class="sched-when"><span class="days">${r.days}</span><span class="time">${r.time}</span></div> </div>`,
        )
        .join(""),
    );
    render(
      "#sliderTrack",
      CONTENT.reviews.items
        .map(
          (r) =>
            `<article class="slide"> <div class="quote-mark">“</div> <blockquote>“${r.text}”</blockquote> <div class="author"><span class="avatar">${r.initials}</span><div><b>${r.name}</b><span>${r.meta}</span></div></div> </article>`,
        )
        .join(""),
    );
    render(
      "#contactSocials",
      `<a href="#" data-tg class="btn btn-telegram btn-sm">${ICONS.telegram}<span>${CONTENT.contact.telegramBtn}</span></a>
      <a href="#" data-instagram class="btn btn-telegram btn-sm">${ICONS.instagram}<span>${CONTENT.contact.instagramBtn}</span></a>
      <a href="#" data-vk class="btn btn-telegram btn-sm">${ICONS.vk}<span>${CONTENT.contact.vkBtn}</span></a>
      <a href="#" data-maps class="btn btn-telegram btn-sm">${ICONS.pin}<span>${CONTENT.contact.mapsBtn}</span></a>`,
    );
  }

  /* ========== 3. Все кнопки записи ведут в Telegram ========== */
  /* Любой элемент с атрибутом data-tg получает ссылку на Telegram-канал */
  function applyTgLinks() {
    document.querySelectorAll("[data-tg]").forEach((a) => {
      a.href = CONTENT.contact.telegramUrl;
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }

  /* ========== 4. Шапка при скролле ========== */
  const header = document.getElementById("header");
  addEventListener("scroll", () =>
    header.classList.toggle("scrolled", scrollY > 10),
  );

  /* ========== 5. Мобильное меню ========== */
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  burger.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  mobileNav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      mobileNav.classList.remove("open");
      burger.classList.remove("open");
    }
  });

  /* ========== 6. Слайдер отзывов ========== */
  const track = document.getElementById("sliderTrack");
  const dotsBox = document.getElementById("dots");
  let idx = 0,
    auto;
  function go(n) {
    const total = track.children.length;
    idx = (n + total) % total;
    track.style.transform = "translateX(-" + idx * 100 + "%)";
    [...dotsBox.children].forEach((d, i) =>
      d.classList.toggle("active", i === idx),
    );
  }
  function restart() {
    clearInterval(auto);
    auto = setInterval(() => go(idx + 1), 6000);
  }
  function initSlider() {
    dotsBox.innerHTML = "";
    [...track.children].forEach((_, i) => {
      const d = document.createElement("button");
      d.className = "dot";
      d.setAttribute("aria-label", "Отзыв " + (i + 1));
      d.addEventListener("click", () => {
        go(i);
        restart();
      });
      dotsBox.appendChild(d);
    });
    go(0);
    restart();
    /* свайпы на телефоне */
    let startX = null;
    const slider = document.getElementById("slider");
    slider.addEventListener(
      "touchstart",
      (e) => (startX = e.touches[0].clientX),
      { passive: true },
    );
    slider.addEventListener(
      "touchend",
      (e) => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) {
          go(idx + (dx < 0 ? 1 : -1));
          restart();
        }
        startX = null;
      },
      { passive: true },
    );
  }

  //  функцию простановки ссылок
  function applySocialLinks() {
    document.querySelectorAll("[data-instagram]").forEach((a) => {
      a.href = CONTENT.contact.instagramUrl;
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });

    document.querySelectorAll("[data-vk]").forEach((a) => {
      a.href = CONTENT.contact.vkUrl;
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });

    document.querySelectorAll("[data-maps]").forEach((a) => {
      a.href = CONTENT.contact.mapsUrl;
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }
  /* ========== 7. Появление блоков при скролле ========== */
  function initReveal() {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  /* ========== СТАРТ ========== */
  applyTexts();
  renderLists();
  applyTgLinks();
  applySocialLinks();
  initSlider();
  initReveal();
})();
