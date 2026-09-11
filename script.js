// const menuBtn = document.getElementById('menuBtn');
// const nav = document.getElementById('nav');
// const navLinks = [...document.querySelectorAll('.nav a')];
// const sections = [...document.querySelectorAll('main section[id]')];
// const researchSlides = document.querySelectorAll(".research-slide");
// const researchDots = document.querySelectorAll(".research-dot");

// const researchPrev = document.querySelector(".research-slider-btn.prev");
// const researchNext = document.querySelector(".research-slider-btn.next");

// let currentResearchSlide = 0;

// function showResearchSlide(index) {

//   researchSlides.forEach((slide) => {
//     slide.classList.remove("active");
//   });

//   researchDots.forEach((dot) => {
//     dot.classList.remove("active");
//   });

//   currentResearchSlide = index;

//   if (currentResearchSlide >= researchSlides.length) {
//     currentResearchSlide = 0;
//   }

//   if (currentResearchSlide < 0) {
//     currentResearchSlide = researchSlides.length - 1;
//   }
//   researchDots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     showResearchSlide(index);
//   });
// });

// if (researchSlides.length > 0) {
//   showResearchSlide(0);
// }

//   researchSlides[currentResearchSlide].classList.add("active");

//   researchDots[currentResearchSlide].classList.add("active");
// }

// researchNext?.addEventListener("click", () => {
//   showResearchSlide(currentResearchSlide + 1);
// });

// researchPrev?.addEventListener("click", () => {
//   showResearchSlide(currentResearchSlide - 1);
// });

// researchDots.forEach((dot, index) => {

//   dot.addEventListener("click", () => {
//     showResearchSlide(index);
//   });

// });

// menuBtn?.addEventListener('click', () => {
//   const isOpen = nav.classList.toggle('open');
//   menuBtn.classList.toggle('active', isOpen);
//   menuBtn.setAttribute('aria-expanded', String(isOpen));
// });

// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     nav.classList.remove('open');
//     menuBtn?.classList.remove('active');
//     menuBtn?.setAttribute('aria-expanded', 'false');
//   });
// });

// const revealObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       revealObserver.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.12 });

// document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// const sectionObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;
//     navLinks.forEach((link) => {
//       link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
//     });
//   });
// }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

// sections.forEach((section) => sectionObserver.observe(section));

// document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const navLinks = [...document.querySelectorAll(".nav a")];
const sections = [...document.querySelectorAll("main section[id]")];

// ======================================
// FINAL YEAR PROJECT SLIDER
// ======================================

const researchSlides = document.querySelectorAll(".research-slide");
const researchDots = document.querySelectorAll(".research-dot");

const researchPrev = document.querySelector(".research-slider-btn.prev");
const researchNext = document.querySelector(".research-slider-btn.next");

let currentResearchSlide = 0;

function showResearchSlide(index) {
  if (index >= researchSlides.length) {
    index = 0;
  }

  if (index < 0) {
    index = researchSlides.length - 1;
  }

  currentResearchSlide = index;

  researchSlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  researchDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  researchSlides[currentResearchSlide]?.classList.add("active");
  researchDots[currentResearchSlide]?.classList.add("active");
}

researchNext?.addEventListener("click", () => {
  showResearchSlide(currentResearchSlide + 1);
});

researchPrev?.addEventListener("click", () => {
  showResearchSlide(currentResearchSlide - 1);
});

researchDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showResearchSlide(index);
  });
});

if (researchSlides.length > 0) {
  showResearchSlide(0);
}

// ======================================
// MOBILE MENU
// ======================================

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuBtn.classList.toggle("active", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuBtn?.classList.remove("active");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// ======================================
// REVEAL ANIMATION
// ======================================

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// ======================================
// ACTIVE NAV SECTION
// ======================================

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  },
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// ======================================
// FOOTER YEAR
// ======================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
