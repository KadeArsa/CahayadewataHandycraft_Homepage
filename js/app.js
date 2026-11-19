/**
 * ============================================================================
 * LOGIKA INTERAKTIF WEBSITE — CAHAYA DEWATA HANDYCRAFT
 * ============================================================================
 */

(function () {
  "use strict";

  let currentLang = "id";
  let currentFilter = "all";
  let currentFilteredItems = [...GALLERY_ITEMS];
  let activeLightboxIndex = 0;

  // DOM References
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileDrawerClose = document.getElementById("mobileDrawerClose");
  const mobileDrawerBackdrop = document.getElementById("mobileDrawerBackdrop");
  const processGrid = document.getElementById("processGrid");
  const bonesGrid = document.getElementById("bonesGrid");
  const galleryGrid = document.getElementById("galleryGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const langButtons = document.querySelectorAll(".lang-btn");
  const navLinks = document.querySelectorAll(".nav-link");

  // Lightbox References
  const lightbox = document.getElementById("lightbox");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxMeta = document.getElementById("lightboxMeta");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxWaBtn = document.getElementById("lightboxWaBtn");

  // Contact Form References
  const waQuickForm = document.getElementById("waQuickForm");

  /**
   * Membangun tautan WhatsApp resmi (wa.me) dengan pesan terformat rapi
   */
  function buildWhatsAppUrl(message) {
    const cleanPhone = String(SITE_CONFIG.whatsappNumber).replace(/[^\d]/g, "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Memperbarui seluruh tautan WhatsApp, telepon, alamat, & peta dari SITE_CONFIG
   */
  function syncContactConfig() {
    const defaultMsg =
      currentLang === "id"
        ? SITE_CONFIG.defaultWaMessageId
        : SITE_CONFIG.defaultWaMessageEn;

    const customMsg =
      currentLang === "id"
        ? "Halo Cahaya Dewata Handycraft, saya ingin berkonsultasi mengenai pesanan custom (motif khusus / kalung / mainan / ekspor)."
        : "Hello Cahaya Dewata Handycraft, I would like to discuss a custom order (custom motif / necklaces / export inquiry).";

    document.querySelectorAll(".js-wa-direct").forEach((el) => {
      el.href = buildWhatsAppUrl(defaultMsg);
    });

    document.querySelectorAll(".js-wa-custom").forEach((el) => {
      el.href = buildWhatsAppUrl(customMsg);
    });

    document.querySelectorAll(".js-maps-link").forEach((el) => {
      el.href = SITE_CONFIG.googleMapsShortUrl;
    });

    document.querySelectorAll(".js-phone-link").forEach((el) => {
      el.textContent = SITE_CONFIG.phoneDisplay;
      el.href = `tel:+${String(SITE_CONFIG.whatsappNumber).replace(/[^\d]/g, "")}`;
    });

    const addressEl = document.getElementById("contactAddress");
    if (addressEl) addressEl.textContent = SITE_CONFIG.address;

    const hoursEl = document.getElementById("contactHours");
    if (hoursEl) {
      hoursEl.textContent =
        currentLang === "id" ? SITE_CONFIG.hoursId : SITE_CONFIG.hoursEn;
    }

    const mapIframe = document.getElementById("googleMapIframe");
    if (mapIframe && SITE_CONFIG.googleMapsEmbedUrl) {
      const targetUrl = SITE_CONFIG.googleMapsEmbedUrl.replace(
        /hl=(id|en)/,
        `hl=${currentLang}`
      );
      if (mapIframe.getAttribute("src") !== targetUrl) {
        mapIframe.setAttribute("src", targetUrl);
      }
    }
  }

  /**
   * Merender 6 Tahapan Proses Pembuatan
   */
  function renderProcessSteps() {
    if (!processGrid) return;
    processGrid.innerHTML = PROCESS_STEPS.map((item) => {
      const title = currentLang === "id" ? item.titleId : item.titleEn;
      const desc = currentLang === "id" ? item.descId : item.descEn;
      const badge = currentLang === "id" ? item.badgeId : item.badgeEn;
      const stepLabel = currentLang === "id" ? `TAHAP ${item.step}` : `STEP ${item.step}`;

      return `
        <article class="process-card reveal is-visible">
          <div class="process-card__media">
            <img src="${encodeURI(item.image)}" alt="${title}" loading="lazy" />
            <span class="process-card__num">${stepLabel}</span>
          </div>
          <div class="process-card__body">
            <h3 class="process-card__title">${title}</h3>
            <p class="process-card__desc">${desc}</p>
            ${
              badge
                ? `<div class="process-card__badge">
                     <span>
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                       </svg>
                       ${badge}
                     </span>
                   </div>`
                : ""
            }
          </div>
        </article>
      `;
    }).join("");
  }

  /**
   * Merender Pengenalan Jenis Tulang & Tanduk
   */
  function renderBoneTypes() {
    if (!bonesGrid) return;
    bonesGrid.innerHTML = BONE_TYPES.map((bone) => {
      const tag = currentLang === "id" ? bone.tagId : bone.tagEn;
      const title = currentLang === "id" ? bone.titleId : bone.titleEn;
      const character = currentLang === "id" ? bone.characterId : bone.characterEn;
      const desc = currentLang === "id" ? bone.descId : bone.descEn;
      const uses = currentLang === "id" ? bone.usesId : bone.usesEn;

      return `
        <article class="bone-card reveal is-visible">
          <div class="bone-card__media">
            <img src="${encodeURI(bone.image)}" alt="${title}" loading="lazy" />
          </div>
          <div class="bone-card__body">
            <span class="bone-card__tag">${tag}</span>
            <h3 class="bone-card__title">${title}</h3>
            <p class="bone-card__char">${character}</p>
            <p class="bone-card__desc">${desc}</p>
            <div class="bone-card__uses">
              ${uses.map((u) => `<span class="bone-chip">${u}</span>`).join("")}
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  /**
   * Merender Galeri Koleksi Karya sesuai kategori filter
   */
  function renderGallery() {
    if (!galleryGrid) return;
    currentFilteredItems =
      currentFilter === "all"
        ? [...GALLERY_ITEMS]
        : GALLERY_ITEMS.filter((item) => item.category === currentFilter);

    const zoomHint = TRANSLATIONS[currentLang]["gallery.zoomHint"] || "Lihat Detail";

    galleryGrid.innerHTML = currentFilteredItems
      .map((item, idx) => {
        const title = currentLang === "id" ? item.titleId : item.titleEn;
        const material = currentLang === "id" ? item.materialId : item.materialEn;
        const desc = currentLang === "id" ? item.descId : item.descEn;

        return `
          <article
            class="gallery-card"
            role="button"
            tabindex="0"
            data-index="${idx}"
            aria-label="${title}"
          >
            <div class="gallery-card__media">
              <img src="${encodeURI(item.image)}" alt="${title}" loading="lazy" />
              <div class="gallery-card__overlay">
                <span class="gallery-card__zoom">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  ${zoomHint}
                </span>
              </div>
            </div>
            <div class="gallery-card__body">
              <span class="gallery-card__meta">${material}</span>
              <h3 class="gallery-card__title">${title}</h3>
              <p class="gallery-card__desc">${desc}</p>
            </div>
          </article>
        `;
      })
      .join("");

    galleryGrid.querySelectorAll(".gallery-card").forEach((card) => {
      const openHandler = () => {
        const index = Number(card.getAttribute("data-index"));
        openLightbox(index);
      };
      card.addEventListener("click", openHandler);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHandler();
        }
      });
    });
  }

  /**
   * Lightbox Modal Controls
   */
  function updateLightboxContent() {
    const item = currentFilteredItems[activeLightboxIndex];
    if (!item) return;

    const title = currentLang === "id" ? item.titleId : item.titleEn;
    const material = currentLang === "id" ? item.materialId : item.materialEn;
    const desc = currentLang === "id" ? item.descId : item.descEn;

    lightboxImg.src = encodeURI(item.image);
    lightboxImg.alt = title;
    lightboxMeta.textContent = material;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;

    const waText =
      currentLang === "id"
        ? `Halo Cahaya Dewata Handycraft, saya tertarik dengan karya "${title}" (${material}). Boleh saya menanyakan informasi harga, ukuran, atau ketersediaannya?`
        : `Hello Cahaya Dewata Handycraft, I am interested in "${title}" (${material}). Could you share sizing, pricing, or availability details?`;

    lightboxWaBtn.href = buildWhatsAppUrl(waText);
  }

  function openLightbox(index) {
    activeLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  function stepLightbox(delta) {
    const total = currentFilteredItems.length;
    if (total === 0) return;
    activeLightboxIndex = (activeLightboxIndex + delta + total) % total;
    updateLightboxContent();
  }

  /**
   * Pengaturan Bahasa (ID / EN)
   */
  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    const dict = TRANSLATIONS[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    langButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    syncContactConfig();
    renderProcessSteps();
    renderBoneTypes();
    renderGallery();
    if (lightbox.classList.contains("is-open")) {
      updateLightboxContent();
    }
  }

  /**
   * Mobile Drawer Controls
   */
  function setDrawerOpen(isOpen) {
    mobileDrawer.classList.toggle("is-open", isOpen);
    mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  }

  /**
   * Navbar Scroll State & Active Section Spy
   */
  function handleScroll() {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle("is-scrolled", scrolled);

    const sections = ["beranda", "profil", "proses", "jenis-tulang", "koleksi", "kontak"];
    const scrollPos = window.scrollY + 140;
    let activeId = "beranda";

    for (const id of sections) {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPos) {
        activeId = id;
      }
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === `#${activeId}`);
    });
  }

  /**
   * Scroll Reveal Animation
   */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /**
   * Event Listeners
   */
  function bindEvents() {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Mobile drawer
    navToggle.addEventListener("click", () => setDrawerOpen(true));
    mobileDrawerClose.addEventListener("click", () => setDrawerOpen(false));
    mobileDrawerBackdrop.addEventListener("click", () => setDrawerOpen(false));
    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setDrawerOpen(false));
    });

    // Language switch
    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang && lang !== currentLang) {
          applyLanguage(lang);
        }
      });
    });

    // Gallery filters
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-filter") || "all";
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        renderGallery();
      });
    });

    // Lightbox events
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxBackdrop.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", () => stepLightbox(-1));
    lightboxNext.addEventListener("click", () => stepLightbox(1));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (lightbox.classList.contains("is-open")) closeLightbox();
        if (mobileDrawer.classList.contains("is-open")) setDrawerOpen(false);
      }
      if (lightbox.classList.contains("is-open")) {
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
      }
    });

    // Quick WhatsApp Form Submission
    if (waQuickForm) {
      waQuickForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("waName").value.trim();
        const interestSelect = document.getElementById("waInterest");
        const interestText =
          interestSelect.options[interestSelect.selectedIndex]?.textContent || "";
        const note = document.getElementById("waMessage").value.trim();

        let composedMessage = "";
        if (currentLang === "id") {
          composedMessage =
            `Halo Cahaya Dewata Handycraft,\n` +
            `Perkenalkan, nama saya *${name}*.\n` +
            `Saya tertarik pada: *${interestText}*.` +
            (note ? `\n\nPesan tambahan:\n${note}` : "") +
            `\n\nTerima kasih!`;
        } else {
          composedMessage =
            `Hello Cahaya Dewata Handycraft,\n` +
            `My name is *${name}*.\n` +
            `I am interested in: *${interestText}*.` +
            (note ? `\n\nAdditional details:\n${note}` : "") +
            `\n\nThank you!`;
        }

        window.open(buildWhatsAppUrl(composedMessage), "_blank", "noopener,noreferrer");
      });
    }
  }

  // Initialize
  applyLanguage("id");
  handleScroll();
  initScrollReveal();
  bindEvents();
})();

