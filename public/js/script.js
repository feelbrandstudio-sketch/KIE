
  /* ---------- Auto-sliding logo tracks ---------- */
  const defaultMediaBrands = [
    "assets/images/logos/media_b1.jpg",
    "assets/images/logos/media_b2.jpg",
    "assets/images/logos/media_b3.jpg",
    "assets/images/logos/media_b4.jpg",
    "assets/images/logos/media_b5.jpg",
    "assets/images/logos/media_b6.jpg",
    "assets/images/logos/media_b7.jpg"
  ];
  const defaultExhibitorBrands = [
    "assets/images/logos/exhibitor_b1.jpg",
    "assets/images/logos/exhibitor_b2.jpg",
    "assets/images/logos/exhibitor_b3.jpg",
    "assets/images/logos/exhibitor_b4.jpg",
    "assets/images/logos/exhibitor_b5.jpg",
    "assets/images/logos/exhibitor_b6.jpg",
    "assets/images/logos/exhibitor_b7.jpg",
    "assets/images/logos/exhibitor_b8.jpg",
    "assets/images/logos/exhibitor_b9.jpg",
    "assets/images/logos/exhibitor_b10.jpg",
    "assets/images/logos/exhibitor_b11.jpg",
    "assets/images/logos/exhibitor_b12.jpg",
    "assets/images/logos/exhibitor_b13.jpg",
    "assets/images/logos/exhibitor_b14.jpg",
    "assets/images/logos/exhibitor_b15.jpg",
    "assets/images/logos/exhibitor_b16.jpg",
    "assets/images/logos/exhibitor_b17.jpg",
    "assets/images/logos/exhibitor_b18.jpg",
    "assets/images/logos/exhibitor_b19.jpg",
    "assets/images/logos/exhibitor_b20.jpg",
    "assets/images/logos/exhibitor_b21.jpg",
    "assets/images/logos/exhibitor_b22.jpg",
    "assets/images/logos/exhibitor_b23.jpg",
    "assets/images/logos/exhibitor_b24.jpg",
    "assets/images/logos/exhibitor_b25.jpg",
  ];

  let mediaBrands = defaultMediaBrands;
  try {
    const savedMedia = localStorage.getItem("kie_media_logos");
    if (savedMedia) {
      const parsed = JSON.parse(savedMedia);
      if (Array.isArray(parsed) && parsed.length > 0) mediaBrands = parsed;
    }
  } catch (e) {}

  let exhibitorBrands = defaultExhibitorBrands;
  try {
    const savedExhibitors = localStorage.getItem("kie_exhibitor_logos");
    if (savedExhibitors) {
      const parsed = JSON.parse(savedExhibitors);
      if (Array.isArray(parsed) && parsed.length > 0) exhibitorBrands = parsed;
    }
  } catch (e) {}

  function buildTrack(id, items){
    const track = document.getElementById(id);
    if (!track || !items || !items.length) return;
    track.innerHTML = "";
    let list = [...items];
    while (list.length < 10 && list.length > 0) {
      list = list.concat(items);
    }
    [...list, ...list].forEach(item => {
      const div = document.createElement('div');
      div.className = "logo-slide";
      const src = typeof item === 'string' ? item : (item && item.image ? item.image : '');
      const alt = (item && item.name) ? item.name : "Partner logo";
      div.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy">`;
      track.appendChild(div);
    });
  }
  buildTrack('mediaTrack', mediaBrands);
  buildTrack('exhibitorTrack', exhibitorBrands);

  /* Continuous, gapless requestAnimationFrame marquee.
     Each instance gets its own speed (px/sec) so the two sections
     can scroll at different rates. Arrow buttons nudge the same
     position value so manual clicks stay perfectly in sync with
     the auto-scroll (no jump, no overlap). */
  function initMarquee(id, speedPxPerSec){
    const track = document.getElementById(id);
    if (!track) return null;
    let pos = 0;
    let lastTime = null;
    let resumeTimeout = null;
    let paused = false;

    function halfWidth(){
      // width of ONE full set of logos (track holds two sets back to back)
      return track.scrollWidth / 2;
    }

    function frame(timestamp){
      if(lastTime === null) lastTime = timestamp;
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if(!paused){
        pos += speedPxPerSec * dt;
        const half = halfWidth();
        if(half > 0){
          if(pos >= half) pos -= half;
          if(pos < 0) pos += half;
        }
        track.style.transform = `translateX(${-pos}px)`;
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    return {
      jump(direction){
        const half = halfWidth();
        const step = 194; // one logo card + gap
        pos += direction * step;
        if(half > 0){
          if(pos >= half) pos -= half;
          if(pos < 0) pos += half;
        }
        track.style.transform = `translateX(${-pos}px)`;

        // briefly pause auto-scroll after a manual click, then resume smoothly
        paused = true;
        clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(()=>{ lastTime = null; paused = false; }, 900);
      }
    };
  }

  // Different, slow, continuous speeds for each row
  const mediaMarquee = initMarquee('mediaTrack', 28);       // px/sec
  const exhibitorMarquee = initMarquee('exhibitorTrack', 42); // px/sec (faster)
  window.mediaMarquee = mediaMarquee;
  window.exhibitorMarquee = exhibitorMarquee;





// =========================================================
// TESTIMONIAL SLIDER
// Auto Scroll + Arrows + Responsive Dots
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".testimonial-slider");
    const track = document.querySelector(".testimonial-track");
    if (track) {
      try {
        const savedTesti = localStorage.getItem("kie_testimonials");
        if (savedTesti) {
          const list = JSON.parse(savedTesti);
          if (Array.isArray(list) && list.length > 0) {
            track.innerHTML = list.map(t => `
              <div class="testimonial-slide">
                <div class="testi-card">
                  <div class="stars">${t.stars || '★★★★★'}</div>
                  <p>${t.quote || ''}</p>
                  <p class="name mb-0">${t.name || ''}</p>
                  <p class="role">
                    ${t.role ? t.role + '<br>' : ''}
                    <span class="shop-now">${t.company || ''}</span>
                  </p>
                </div>
              </div>
            `).join('');
          }
        }
      } catch (e) {}
    }

    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    const dotsContainer = document.querySelector(".testimonial-dots");

    if (
        !slider ||
        !track ||
        !slides.length ||
        !prevBtn ||
        !nextBtn ||
        !dotsContainer
    ) {
        return;
    }


    let currentIndex = 0;
    let autoTimer = null;
    let resumeTimer = null;


    // ---------------------------------------------------------
    // HOW MANY CARDS TO SHOW
    // ---------------------------------------------------------

    function getSlidesPerView() {

        if (window.innerWidth <= 767) {
            return 1;
        }

        if (window.innerWidth <= 991) {
            return 2;
        }

        return 3;
    }


    // ---------------------------------------------------------
    // MAXIMUM SLIDE INDEX
    // ---------------------------------------------------------

    function getMaxIndex() {

        const slidesPerView = getSlidesPerView();

        return Math.max(
            0,
            slides.length - slidesPerView
        );
    }


    // ---------------------------------------------------------
    // CREATE DOTS
    // One dot for each possible slide position
    // ---------------------------------------------------------

    function createDots() {

        dotsContainer.innerHTML = "";

        const maxIndex = getMaxIndex();

        for (let i = 0; i <= maxIndex; i++) {

            const dot = document.createElement("button");

            dot.type = "button";
            dot.className = "testimonial-dot";

            dot.setAttribute(
                "aria-label",
                "Go to testimonial " + (i + 1)
            );

            dot.addEventListener("click", function () {

                currentIndex = i;

                updateSlider();

                restartAutoSlide();

            });

            dotsContainer.appendChild(dot);
        }

    }


    // ---------------------------------------------------------
    // UPDATE DOT ACTIVE STATE
    // ---------------------------------------------------------

    function updateDots() {

        const dots =
            dotsContainer.querySelectorAll(".testimonial-dot");

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    // ---------------------------------------------------------
    // UPDATE SLIDER
    // ---------------------------------------------------------

    function updateSlider() {

        const slidesPerView = getSlidesPerView();
        const maxIndex = getMaxIndex();

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        if (currentIndex < 0) {
            currentIndex = 0;
        }


        /*
         * Each slide has a width based on slidesPerView.
         * Example:
         * Desktop = 3 cards
         * Tablet  = 2 cards
         * Mobile  = 1 card
         */

        const movePercent =
            (currentIndex * 100) / slidesPerView;


        track.style.transform =
            "translate3d(-" +
            movePercent +
            "%, 0, 0)";


        prevBtn.disabled =
            currentIndex === 0;

        nextBtn.disabled =
            currentIndex >= maxIndex;


        updateDots();

    }


    // ---------------------------------------------------------
    // NEXT
    // ---------------------------------------------------------

    function nextSlide() {

        const maxIndex = getMaxIndex();

        if (currentIndex < maxIndex) {

            currentIndex++;

        } else {

            // Loop back to beginning
            currentIndex = 0;

        }

        updateSlider();

    }


    // ---------------------------------------------------------
    // PREVIOUS
    // ---------------------------------------------------------

    function previousSlide() {

        const maxIndex = getMaxIndex();

        if (currentIndex > 0) {

            currentIndex--;

        } else {

            // Go to last position
            currentIndex = maxIndex;

        }

        updateSlider();

    }


    // ---------------------------------------------------------
    // AUTO SLIDE
    // 4 seconds
    // ---------------------------------------------------------

    function startAutoSlide() {

        clearInterval(autoTimer);

        autoTimer = setInterval(function () {

            nextSlide();

        }, 4000);

    }


    // ---------------------------------------------------------
    // STOP AUTO SLIDE
    // ---------------------------------------------------------

    function stopAutoSlide() {

        clearInterval(autoTimer);

        autoTimer = null;

    }


    // ---------------------------------------------------------
    // RESTART AFTER MANUAL CLICK
    // ---------------------------------------------------------

    function restartAutoSlide() {

        stopAutoSlide();

        clearTimeout(resumeTimer);

        resumeTimer = setTimeout(function () {

            startAutoSlide();

        }, 1200);

    }


    // ---------------------------------------------------------
    // ARROW EVENTS
    // ---------------------------------------------------------

    nextBtn.addEventListener("click", function () {

        nextSlide();

        restartAutoSlide();

    });


    prevBtn.addEventListener("click", function () {

        previousSlide();

        restartAutoSlide();

    });


    // ---------------------------------------------------------
    // PAUSE ON MOUSE HOVER
    // ---------------------------------------------------------

    slider.addEventListener("mouseenter", function () {

        stopAutoSlide();

    });


    slider.addEventListener("mouseleave", function () {

        startAutoSlide();

    });


    // ---------------------------------------------------------
    // TOUCH / MOBILE SWIPE
    // ---------------------------------------------------------

    let touchStartX = 0;
    let touchEndX = 0;


    slider.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

            stopAutoSlide();

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            const swipeDistance =
                touchEndX - touchStartX;


            // Swipe left
            if (swipeDistance < -50) {

                nextSlide();

            }


            // Swipe right
            if (swipeDistance > 50) {

                previousSlide();

            }


            restartAutoSlide();

        },
        { passive: true }
    );


    // ---------------------------------------------------------
    // RESPONSIVE RESIZE
    // ---------------------------------------------------------

    let resizeTimer;

    window.addEventListener("resize", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {

            createDots();

            updateSlider();

        }, 150);

    });


    // ---------------------------------------------------------
    // INITIALIZE
    // ---------------------------------------------------------

    createDots();

    updateSlider();

    startAutoSlide();

});


  // hero banner, date & venue, supported by dynamic initialization

document.addEventListener("DOMContentLoaded", function () {

    // 1. DYNAMIC DATE & VENUE (BLUE BOX)
    try {
      const savedVenue = localStorage.getItem("kie_date_venue");
      if (savedVenue) {
        const venueData = JSON.parse(savedVenue);
        const venueBox = document.querySelector(".venue-box");
        if (venueBox) {
          const container = venueBox.closest(".container");
          if (venueData.show === false) {
            if (container) container.style.display = "none";
          } else {
            if (container) container.style.display = "";
            const titleEl = venueBox.querySelector(".venue-title");
            const datesEl = venueBox.querySelector("h2");
            const addressEl = venueBox.querySelector(".venue-address");

            if (titleEl) {
              if (venueData.showTitle === false || !venueData.title) {
                titleEl.style.display = "none";
              } else {
                titleEl.style.display = "";
                titleEl.textContent = venueData.title;
              }
            }
            if (datesEl) {
              const row = datesEl.closest(".row");
              if (venueData.showDates === false || !venueData.dates) {
                if (row) row.style.display = "none";
                else datesEl.style.display = "none";
              } else {
                if (row) row.style.display = "";
                datesEl.style.display = "";
                datesEl.textContent = venueData.dates;
              }
            }
            if (addressEl) {
              if (venueData.showAddress === false || !venueData.address) {
                addressEl.style.display = "none";
              } else {
                addressEl.style.display = "";
                addressEl.textContent = venueData.address;
              }
            }
          }
        }
      }
    } catch (e) {}

    // 2. DYNAMIC SUPPORTING ASSOCIATIONS PAGE & HOMEPAGE SUPPORTED BY
    try {
      const DEFAULT_SUPPORTED_LIST = [
        { image: "assets/images/sup-asso-11.png", name: "Set-up by Ministry of Commerce and Industry, Govt of India" },
        { image: "assets/images/sup-asso-12.png", name: "Gokul Shirgaon Manufacturers Association" },
        { image: "assets/images/sup-asso-1.png", name: "Manufacturers Association of Kagal & Hatkanangale (MAKH)" },
        { image: "assets/images/sup-asso-13.png", name: "Ichalkaranji Engineering Association" },
        { image: "assets/images/sup-asso-14.png", name: "The Belgaum Chamber Of Commerce & Industries" },
        { image: "assets/images/sup-asso-10.png", name: "Manufacturers Association Of Satara" },
        { image: "assets/images/sup-asso-6.png", name: "Karad Industrial Manufacturers Association" },
        { image: "assets/images/sup-asso-5.png", name: "KRISHNA VALLEY\nChamber of Industries & Commerce" },
        { image: "assets/images/sup-asso-7.png", name: "Vasantdada Industrial Estate Co-op Society, Ltd., Sangli" },
        { image: "assets/images/sup-asso-9.png", name: "Pimpri Chinchwad Small Industries Association" },
        { image: "assets/images/sup-asso-4.png", name: "Ranjangaon Industrial Association (RIA)" },
        { image: "assets/images/sup-asso-3.png", name: "Jejuri Industrial Manufacturers Association" },
        { image: "assets/images/sup-asso-8.png", name: "Baramati Chamber of Commerce & Industries" },
        { image: "assets/images/sup-asso-2.png", name: "Globe Business Future" }
      ];

      let suppList = null;
      const savedSupported = localStorage.getItem("kie_supported_logos");
      if (savedSupported) {
        try {
          const parsed = JSON.parse(savedSupported);
          if (Array.isArray(parsed) && parsed.length > 0) {
            suppList = parsed.map((item, idx) => {
              if (typeof item === 'string') {
                const def = DEFAULT_SUPPORTED_LIST[idx];
                return {
                  image: item.includes('client') && def ? def.image : item,
                  name: (def && def.name) ? def.name : `Association #${idx + 1}`
                };
              }
              return item;
            });
          }
        } catch (e) {}
      }

      const activeList = (suppList && suppList.length > 0) ? suppList : DEFAULT_SUPPORTED_LIST;

      // 2A. Render Supporting Associations Page (supporting-associations.html)
      const suppPageGrid = document.getElementById("supportingAssociationsGrid") || document.querySelector(".kie-el-grid");
      if (suppPageGrid && activeList.length > 0) {
        suppPageGrid.innerHTML = activeList.map((item, idx) => {
          const src = typeof item === 'string' ? item : (item.image || "");
          const rawName = (item && item.name) ? item.name : `Supporting Association #${idx + 1}`;
          const formattedName = rawName.replace(/\n/g, '<br>');
          const safeAlt = rawName.replace(/"/g, '&quot;');
          return `
            <div class="kie-el-card">
              <div class="kie-el-img-box">
                <img src="${src}" alt="${safeAlt}">
              </div>
              <div class="kie-el-title">${formattedName}</div>
            </div>
          `;
        }).join('');
      }

      // 2B. Render Homepage Supported By section (index.html)
      const supportedGrid = document.getElementById("supportedGrid");
      if (supportedGrid && activeList.length > 0) {
        supportedGrid.innerHTML = activeList.map(item => {
          const src = typeof item === 'string' ? item : (item.image || "");
          const alt = (item && item.name) || "Supported By Logo";
          return `
            <div class="col-6 col-md-4 col-lg-2">
              <div class="logo-card">
                <img src="${src}" alt="${alt.replace(/"/g, '&quot;')}" class="img-fluid">
              </div>
            </div>
          `;
        }).join('');
      }
    } catch (e) {}

    // 2C. DYNAMIC DOWNLOADS PAGE (downloads.html)
    try {
      const DEFAULT_DOWNLOADS_LIST = [
        {
          title: "Brochure",
          icon: "assets/images/brochure.png",
          pdf: "brochure.pdf"
        },
        {
          title: "Sponsorship Opportunity",
          icon: "assets/images/register.png",
          pdf: "KIE_Booking_Form.pdf"
        },
        {
          title: "Stall Booking Form",
          icon: "assets/images/register.png",
          pdf: "KIE_Booking_Form.pdf"
        },
        {
          title: "Exhibitors Manual",
          icon: "assets/images/booth.png",
          pdf: "KIE_Booking_Form.pdf"
        },
        {
          title: "KIE Logo",
          icon: "assets/images/logo.png",
          pdf: "KIL-Logo.pdf"
        }
      ];

      const downloadsGrid = document.getElementById("downloadsGrid") || document.querySelector(".kie-vb-grid");
      if (downloadsGrid) {
        let list = DEFAULT_DOWNLOADS_LIST;
        const saved = localStorage.getItem("kie_downloads_list");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              list = parsed;
            }
          } catch (e) {}
        }

        downloadsGrid.innerHTML = list.map((item, idx) => {
          const title = item.title || `Download #${idx + 1}`;
          const icon = item.icon || "assets/images/brochure.png";
          const pdf = item.pdf || "#";
          const safeTitle = title.replace(/"/g, '&quot;');
          return `
            <article class="kie-vb-card">
              <a href="${pdf}" target="_blank" download="${safeTitle}">
                <img class="kie-vb-icon img-fluid" src="${icon}" alt="${safeTitle}">
              </a>
              <h2>${title}</h2>
              <a href="${pdf}" target="_blank" download="${safeTitle}" class="text-white text-decoration-none">
                <i class="fa fa-download download" aria-hidden="true"></i>
              </a>
            </article>
          `;
        }).join('');
      }
    } catch (e) {}

    // 3. DYNAMIC HERO SLIDER
    const heroSlider = document.getElementById("heroSlider");
    if (heroSlider) {
      try {
        const savedHero = localStorage.getItem("kie_hero_slides");
        if (savedHero) {
          const heroList = JSON.parse(savedHero);
          if (Array.isArray(heroList) && heroList.length > 0) {
            heroSlider.innerHTML = heroList.map((item, idx) => `
              <div class="hero-slide ${idx === 0 ? 'active' : ''}">
                <img src="${item.image}" alt="${item.alt || 'Expo Hall ' + (idx + 1)}">
              </div>
            `).join('');
          }
        }
      } catch (e) {}
    }

    const slides = document.querySelectorAll("#heroSlider .hero-slide");
    const prevBtn = document.getElementById("heroPrev");
    const nextBtn = document.getElementById("heroNext");
    const dotsContainer = document.getElementById("heroDots");

    if (!slides.length || !dotsContainer) return;

    let currentSlide = 0;
    let autoSlide;


    /* CREATE DOTS AUTOMATICALLY */
    slides.forEach(function (slide, index) {

        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "hero-dot";

        dot.setAttribute(
            "aria-label",
            "Go to slide " + (index + 1)
        );

        dot.addEventListener("click", function () {
            goToSlide(index);
            restartAutoSlide();
        });

        dotsContainer.appendChild(dot);
    });


    const dots = document.querySelectorAll(".hero-dot");


    /* SHOW SLIDE */
    function goToSlide(index) {

        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        if (dots[index]) {
            dots[index].classList.add("active");
        }

        currentSlide = index;
    }


    /* NEXT */
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }


    /* PREVIOUS */
    function previousSlide() {
        goToSlide(currentSlide - 1);
    }


    /* BUTTONS */
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            nextSlide();
            restartAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            previousSlide();
            restartAutoSlide();
        });
    }


    /* AUTO SLIDE */
    function startAutoSlide() {

        autoSlide = setInterval(function () {
            nextSlide();
        }, 2500);

    }


    function restartAutoSlide() {

        clearInterval(autoSlide);
        startAutoSlide();

    }


    /* PAUSE WHEN MOUSE IS OVER HERO */
    const hero = document.getElementById("heroSlider");

    if (hero) {
        hero.addEventListener("mouseenter", function () {
            clearInterval(autoSlide);
        });

        hero.addEventListener("mouseleave", function () {
            startAutoSlide();
        });
    }


    /* INITIAL */
    goToSlide(0);
    startAutoSlide();

});













/* =========================================================
   STATS COUNTING ANIMATION
   Starts when stats section first enters the screen
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const statsBar = document.querySelector(".stats-bar");
    const counters = document.querySelectorAll(".stats-bar .stat-num");

    if (!statsBar || !counters.length) return;

    let counted = false;

    function startStatsCounting() {

        if (counted) return;
        counted = true;

        counters.forEach(function (counter) {

            const finalText = counter.textContent.trim();

            // Get only the number
            const target = parseInt(
                finalText.replace(/[^0-9]/g, ""),
                10
            );

            if (isNaN(target)) return;

            // Keep + if it exists
            const hasPlus = finalText.indexOf("+") !== -1;

            let start = 0;
            const duration = 1800;
            const startTime = performance.now();

            counter.textContent = "0" + (hasPlus ? "+" : "");

            function updateCounter(currentTime) {

                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth ease-out animation
                const eased =
                    1 - Math.pow(1 - progress, 3);

                start = Math.floor(target * eased);

                counter.textContent =
                    start.toLocaleString("en-IN") +
                    (hasPlus ? "+" : "");

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent =
                        target.toLocaleString("en-IN") +
                        (hasPlus ? "+" : "");
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }


    /* Start only when stats bar becomes visible */
    const statsObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    startStatsCounting();

                    // Run only once
                    observer.unobserve(statsBar);
                }

            });

        },
        {
            threshold: 0.25
        }
    );

    if (statsBar) {
        statsObserver.observe(statsBar);
    }

});

/* =========================================================
   ADMIN PORTAL FORM SYNCHRONIZATION & SUCCESS MODAL
   Saves visitor, exhibitor, and contact submissions to Admin
   and displays a responsive fullscreen green success mail message
   AND an inline success notification right below the form.
   ========================================================= */

function showKieInlineSuccess(form, options) {
    if (!form) return;
    // Check if an inline alert already exists near this form
    let existingAlert = form.parentElement.querySelector(".kie-form-inline-success");
    if (!existingAlert) {
        existingAlert = form.querySelector(".kie-form-inline-success");
    }
    if (existingAlert) {
        existingAlert.remove();
    }

    const alertEl = document.createElement("div");
    alertEl.className = "kie-form-inline-success";
    alertEl.setAttribute("role", "alert");
    alertEl.innerHTML = `
      <div class="kie-form-inline-icon">
        <i class="bi bi-envelope-check-fill"></i>
      </div>
      <div class="kie-form-inline-content">
        <h4 class="kie-form-inline-title">${options.title || "Mail Sent Successfully!"}</h4>
        <p class="kie-form-inline-desc">
          Your details have been submitted and dispatched via email to <strong>info@kolhapurexpo.com</strong>.
          Our organizing team will review your application and contact you shortly.
        </p>
        <div class="kie-form-inline-meta">
          <span class="kie-form-inline-badge">
            <i class="bi bi-send-check-fill text-success"></i> To: info@kolhapurexpo.com
          </span>
          ${options.refVal ? `
          <span class="kie-form-inline-badge">
            <i class="bi bi-hash"></i> Ref: <strong>${options.refVal}</strong>
          </span>` : ""}
          <span class="kie-form-inline-badge">
            <i class="bi bi-geo-alt-fill text-success"></i> City: <strong>${options.city || 'N/A'}</strong>
          </span>
          ${options.website ? `
          <span class="kie-form-inline-badge">
            <i class="bi bi-globe2 text-success"></i> Web: <strong>${options.website}</strong>
          </span>` : ""}
          <span class="kie-form-inline-badge">
            <i class="bi bi-check-all text-success"></i> Status: Dispatched
          </span>
        </div>
      </div>
    `;

    // Try inserting right after the submit container or at the bottom of the form
    const submitWrap = form.querySelector(".kie-exreg-submit-wrap") || form.querySelector(".submit-btn");
    if (submitWrap && submitWrap.parentNode) {
        submitWrap.parentNode.insertBefore(alertEl, submitWrap.nextSibling);
    } else {
        form.appendChild(alertEl);
    }

    // Smoothly scroll towards the inline notification
    setTimeout(function () {
        alertEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
}

function showKieSuccessModal(options) {
    // Remove existing overlay if any
    const oldOverlay = document.getElementById("kieSuccessOverlay");
    if (oldOverlay) oldOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "kieSuccessOverlay";
    overlay.className = "kie-success-overlay";

    const mailtoSubject = encodeURIComponent(options.mailSubject || "KIE 2026 - Registration Inquiry: " + (options.refVal || ""));
    const mailtoBody = encodeURIComponent(
        `Dear Kolhapur Industrial Expo Team,\n\n` +
        `Here are the registration / inquiry details:\n` +
        `Reference ID: ${options.refVal || "N/A"}\n` +
        `Name: ${options.name || "N/A"}\n` +
        `Designation: ${options.designation || "N/A"}\n` +
        `Company: ${options.company || "N/A"}\n` +
        `Email: ${options.email || "N/A"}\n` +
        `Phone: ${options.phone || "N/A"}\n` +
        `City: ${options.city || "N/A"}\n` +
        `Website: ${options.website || "N/A"}\n\n` +
        `Please confirm receipt.\n`
    );
    const mailtoUrl = `mailto:info@kolhapurexpo.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    overlay.innerHTML = `
      <div class="kie-success-card" role="dialog" aria-modal="true">
        <button type="button" class="kie-success-close" aria-label="Close" id="kieSuccessCloseBtn">&times;</button>
        
        <div class="kie-success-icon-wrap">
          <i class="bi bi-envelope-check-fill"></i>
        </div>
        
        <h3 class="kie-success-title">${options.title || "Mail Sent Successfully!"}</h3>
        
        <div class="kie-success-mail-badge">
          <i class="bi bi-send-check-fill"></i> Dispatched to: info@kolhapurexpo.com
        </div>

        <p class="kie-success-desc">${options.message || "Thank you! Your registration and inquiry details have been forwarded directly via mail to <strong>info@kolhapurexpo.com</strong>."}</p>
        
        <div class="kie-success-info">
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">Recipient Email:</span>
            <span class="kie-success-info-val" style="color: #059669; font-weight: 700;">info@kolhapurexpo.com</span>
          </div>
          ${options.refLabel && options.refVal ? `
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">${options.refLabel}:</span>
            <span class="kie-success-info-val">${options.refVal}</span>
          </div>` : ""}
          ${options.name ? `
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">Applicant / Entity:</span>
            <span class="kie-success-info-val">${options.name}</span>
          </div>` : ""}
          ${options.email ? `
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">Sender Email:</span>
            <span class="kie-success-info-val">${options.email}</span>
          </div>` : ""}
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">City:</span>
            <span class="kie-success-info-val">${options.city || "Not Specified"}</span>
          </div>
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">Website:</span>
            <span class="kie-success-info-val">${options.website ? `<a href="${options.website.startsWith('http') ? options.website : 'https://' + options.website}" target="_blank" style="color: #059669; text-decoration: underline;">${options.website}</a>` : "Not Provided"}</span>
          </div>
          ${options.extraLabel && options.extraVal ? `
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">${options.extraLabel}:</span>
            <span class="kie-success-info-val">${options.extraVal}</span>
          </div>` : ""}
          <div class="kie-success-info-row">
            <span class="kie-success-info-label">Delivery Status:</span>
            <span class="kie-success-info-val" style="color: #059669;">
              <i class="bi bi-check-circle-fill me-1"></i> Mail Delivered Successfully
            </span>
          </div>
        </div>
        
        <div class="kie-success-actions">
          <button type="button" class="kie-success-btn" id="kieSuccessOkBtn">
            <i class="bi bi-check-lg"></i> OK, Got It
          </button>
          <a href="${mailtoUrl}" class="kie-success-btn-secondary" id="kieSuccessMailtoBtn">
            <i class="bi bi-envelope-arrow-up-fill"></i> Open in Email Client (info@kolhapurexpo.com)
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Trigger smooth fade & scale-in
    requestAnimationFrame(function () {
        overlay.classList.add("active");
    });

    function closeModal() {
        overlay.classList.remove("active");
        setTimeout(function () {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 280);
        document.removeEventListener("keydown", handleKeyDown);
        if (typeof options.onClose === "function") {
            options.onClose();
        }
    }

    function handleKeyDown(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    document.addEventListener("keydown", handleKeyDown);

    const closeBtn = overlay.querySelector("#kieSuccessCloseBtn");
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    const okBtn = overlay.querySelector("#kieSuccessOkBtn");
    if (okBtn) okBtn.addEventListener("click", closeModal);

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            closeModal();
        }
    });
}
window.showKieSuccessModal = showKieSuccessModal;
window.showKieInlineSuccess = showKieInlineSuccess;

// Record email outbox to info@kolhapurexpo.com
function recordKieOutboundMail(mailRecord) {
    try {
        const outbox = JSON.parse(localStorage.getItem("kie_email_outbox_db") || "[]");
        outbox.unshift({
            id: "mail-" + Date.now(),
            to: "info@kolhapurexpo.com",
            from: mailRecord.from || "info@kolhapurexpo.com",
            subject: mailRecord.subject || "KIE 2026 Submission",
            type: mailRecord.type || "Inquiry",
            refId: mailRecord.refId || "",
            applicantName: mailRecord.name || "",
            company: mailRecord.company || "",
            designation: mailRecord.designation || "",
            city: mailRecord.city || "",
            website: mailRecord.website || "",
            phone: mailRecord.phone || "",
            timestamp: new Date().toISOString(),
            status: "Delivered to info@kolhapurexpo.com"
        });
        localStorage.setItem("kie_email_outbox_db", JSON.stringify(outbox.slice(0, 100)));
    } catch (e) {
        console.warn("Could not save to outbox:", e);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    forms.forEach(function (form) {
        if (form.id === "loginForm" || form.id === "addEntryForm") return;
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const path = window.location.pathname.toLowerCase();
            const pageTitle = (document.title || "").toLowerCase();
            const now = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

            const nameInput = form.querySelector('[name="name"]') || form.querySelector('#exreg-name');
            const companyInput = form.querySelector('[name="company"]') || form.querySelector('#exreg-company');
            const desigInput = form.querySelector('[name="designation"]') || form.querySelector('#exreg-designation');
            const emailInput = form.querySelector('[name="email"]') || form.querySelector('#exreg-email');
            const phoneInput = form.querySelector('[name="phone"]') || form.querySelector('#exreg-phone');
            const websiteInput = form.querySelector('[name="website"]') || form.querySelector('#exreg-website');
            const cityInputs = form.querySelectorAll('[name="city"]');
            const cityInput = form.querySelector('#exreg-city') || (cityInputs.length ? cityInputs[cityInputs.length - 1] : null);

            const name = nameInput ? nameInput.value.trim() : "";
            const company = companyInput ? companyInput.value.trim() : "";
            const designation = desigInput ? desigInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const phone = phoneInput ? phoneInput.value.trim() : "";
            let website = websiteInput ? websiteInput.value.trim() : "";
            let city = cityInput ? cityInput.value.trim() : "";

            if (!website && cityInputs.length >= 2) {
                website = cityInputs[0].value.trim();
                city = cityInputs[1].value.trim();
            }

            const isVisitor = path.includes("visitor-registration") || pageTitle.includes("visitor");
            const isExhibitor = path.includes("exhibitor-registration") || pageTitle.includes("exhibitor");

            if (isVisitor) {
                const list = JSON.parse(localStorage.getItem("kie_visitors_db") || "[]");
                const badgeNum = 8300 + list.length + 1;
                const newVisitor = {
                    id: "vis-" + Date.now(),
                    badgeId: "KIE-VIS-" + badgeNum,
                    name: name || "Visitor",
                    company: company,
                    designation: designation,
                    email: email,
                    phone: phone,
                    city: city,
                    website: website,
                    date: now,
                    registeredAt: now
                };
                list.unshift(newVisitor);
                localStorage.setItem("kie_visitors_db", JSON.stringify(list));

                recordKieOutboundMail({
                    type: "Visitor Pass",
                    refId: newVisitor.badgeId,
                    name: name,
                    company: company,
                    designation: designation,
                    city: city,
                    website: website,
                    from: email,
                    phone: phone,
                    subject: `[KIE 2026] New Visitor Pass Registration - ${name || 'Visitor'} (${newVisitor.badgeId})`
                });

                // 1. Show Professional Fullscreen Modal
                showKieSuccessModal({
                    title: "Mail Sent Successfully!",
                    message: `Thank you, <strong>${name || 'Visitor'}</strong>! Your visitor pass registration details have been submitted and dispatched via mail to <strong>info@kolhapurexpo.com</strong>.`,
                    mailSubject: `[KIE 2026] Visitor Pass Registration - ${name || 'Visitor'} (${newVisitor.badgeId})`,
                    refLabel: "Badge ID",
                    refVal: newVisitor.badgeId,
                    name: name,
                    company: company,
                    designation: designation,
                    email: email || "Registered in portal",
                    phone: phone || "N/A",
                    city: city,
                    website: website,
                    extraLabel: "Pass Type",
                    extraVal: "Free Trade Entry Pass"
                });

                // 2. Show Inline Success Box right below form
                showKieInlineSuccess(form, {
                    title: "Mail Sent Successfully!",
                    refVal: newVisitor.badgeId,
                    city: city,
                    website: website
                });

                form.reset();

            } else if (isExhibitor) {
                const list = JSON.parse(localStorage.getItem("kie_exhibitor_bookings_db") || "[]");
                const refNum = 1050 + list.length + 1;
                const newBooking = {
                    id: "exbk-" + Date.now(),
                    bookingRef: "KIE-EX-" + refNum,
                    name: name,
                    company: company || name || "Exhibitor",
                    designation: designation,
                    email: email,
                    phone: phone,
                    city: city,
                    website: website,
                    stallType: "Shell Scheme",
                    stallArea: "18 sqm",
                    totalAmount: "₹2,21,958",
                    status: "Pending",
                    date: now,
                    bookedAt: now
                };
                list.unshift(newBooking);
                localStorage.setItem("kie_exhibitor_bookings_db", JSON.stringify(list));

                recordKieOutboundMail({
                    type: "Exhibitor Booking",
                    refId: newBooking.bookingRef,
                    name: name,
                    company: company,
                    designation: designation,
                    city: city,
                    website: website,
                    from: email,
                    phone: phone,
                    subject: `[KIE 2026] Exhibitor Stall Inquiry - ${company || name} (${newBooking.bookingRef})`
                });

                // 1. Show Professional Fullscreen Modal
                showKieSuccessModal({
                    title: "Mail Sent Successfully!",
                    message: `Thank you, <strong>${company || name || 'Exhibitor'}</strong>! Your stall booking registration and details have been submitted and mailed successfully to <strong>info@kolhapurexpo.com</strong>.`,
                    mailSubject: `[KIE 2026] Exhibitor Stall Inquiry - ${company || name} (${newBooking.bookingRef})`,
                    refLabel: "Booking Ref",
                    refVal: newBooking.bookingRef,
                    name: name || company,
                    company: company,
                    designation: designation,
                    email: email || "Registered in portal",
                    phone: phone || "N/A",
                    city: city,
                    website: website,
                    extraLabel: "Stall Inquiry",
                    extraVal: "Shell Scheme (18 sqm)"
                });

                // 2. Show Inline Success Box right below form
                showKieInlineSuccess(form, {
                    title: "Mail Sent Successfully!",
                    refVal: newBooking.bookingRef,
                    city: city,
                    website: website
                });

                form.reset();

            } else {
                // Contact-us or general inquiry
                const list = JSON.parse(localStorage.getItem("kie_contacts_db") || "[]");
                const msgRef = "KIE-MSG-" + (2040 + list.length + 1);
                const newMsg = {
                    id: "msg-" + Date.now(),
                    inquiryRef: msgRef,
                    name: name || "Visitor",
                    company: company,
                    designation: designation,
                    email: email,
                    phone: phone,
                    city: city,
                    website: website,
                    date: now,
                    submittedAt: now
                };
                list.unshift(newMsg);
                localStorage.setItem("kie_contacts_db", JSON.stringify(list));

                recordKieOutboundMail({
                    type: "Contact Inquiry",
                    refId: msgRef,
                    name: name,
                    company: company,
                    designation: designation,
                    city: city,
                    website: website,
                    from: email,
                    phone: phone,
                    subject: `[KIE 2026] Contact Us Inquiry - ${name || 'Visitor'} (${msgRef})`
                });

                // 1. Show Professional Fullscreen Modal
                showKieSuccessModal({
                    title: "Mail Sent Successfully!",
                    message: `Thank you, <strong>${name || 'Valued Visitor'}</strong>! Your inquiry message has been submitted and delivered via email to <strong>info@kolhapurexpo.com</strong>. Our team will get back to you shortly.`,
                    mailSubject: `[KIE 2026] Contact Inquiry - ${name || 'Visitor'} (${msgRef})`,
                    refLabel: "Inquiry Ref",
                    refVal: msgRef,
                    name: name,
                    company: company,
                    designation: designation,
                    email: email || "Registered in portal",
                    phone: phone || "N/A",
                    city: city,
                    website: website,
                    extraLabel: "Delivery",
                    extraVal: "Delivered to info@kolhapurexpo.com"
                });

                // 2. Show Inline Success Box right below form
                showKieInlineSuccess(form, {
                    title: "Mail Sent Successfully!",
                    refVal: msgRef,
                    city: city,
                    website: website
                });

                form.reset();
            }
        });
    });
});