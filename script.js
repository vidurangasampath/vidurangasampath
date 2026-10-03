const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const navLinks = [...document.querySelectorAll(".nav a")];
const sections = [...document.querySelectorAll("main section[id]")];


// ==================================================
// FINAL YEAR PROJECT / RESEARCH SLIDER
// ==================================================

const researchSlides = document.querySelectorAll(".research-slide");
const researchDots = document.querySelectorAll(".research-dot");

const researchPrev = document.querySelector(
  ".research-slider-btn.prev"
);

const researchNext = document.querySelector(
  ".research-slider-btn.next"
);

let currentResearchSlide = 0;


function showResearchSlide(index) {

  if (!researchSlides.length) return;


  // Loop to first slide
  if (index >= researchSlides.length) {
    index = 0;
  }


  // Loop to last slide
  if (index < 0) {
    index = researchSlides.length - 1;
  }


  currentResearchSlide = index;


  // Remove active state
  researchSlides.forEach((slide) => {
    slide.classList.remove("active");
  });


  researchDots.forEach((dot) => {
    dot.classList.remove("active");
  });


  // Activate selected slide
  researchSlides[currentResearchSlide]?.classList.add("active");

  researchDots[currentResearchSlide]?.classList.add("active");
}


// NEXT

researchNext?.addEventListener("click", () => {

  showResearchSlide(currentResearchSlide + 1);

});


// PREVIOUS

researchPrev?.addEventListener("click", () => {

  showResearchSlide(currentResearchSlide - 1);

});


// DOT NAVIGATION

researchDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showResearchSlide(index);

  });

});


// INITIALIZE

if (researchSlides.length > 0) {

  showResearchSlide(0);

}



// ==================================================
// DEFECT CLASSIFICATION & CODING SYSTEM SLIDER
// ==================================================

const defectSlides = document.querySelectorAll(
  ".defect-slide"
);

const defectDots = document.querySelectorAll(
  ".defect-dot"
);

const defectPrev = document.querySelector(
  ".defect-slider-btn.prev"
);

const defectNext = document.querySelector(
  ".defect-slider-btn.next"
);

let currentDefectSlide = 0;


function showDefectSlide(index) {

  if (!defectSlides.length) return;


  // Loop to first slide
  if (index >= defectSlides.length) {
    index = 0;
  }


  // Loop to last slide
  if (index < 0) {
    index = defectSlides.length - 1;
  }


  currentDefectSlide = index;


  // Remove active state
  defectSlides.forEach((slide) => {
    slide.classList.remove("active");
  });


  defectDots.forEach((dot) => {
    dot.classList.remove("active");
  });


  // Activate selected slide
  defectSlides[currentDefectSlide]?.classList.add("active");

  defectDots[currentDefectSlide]?.classList.add("active");
}


// NEXT

defectNext?.addEventListener("click", () => {

  showDefectSlide(currentDefectSlide + 1);

});


// PREVIOUS

defectPrev?.addEventListener("click", () => {

  showDefectSlide(currentDefectSlide - 1);

});


// DOT NAVIGATION

defectDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showDefectSlide(index);

  });

});


// INITIALIZE

if (defectSlides.length > 0) {

  showDefectSlide(0);

}

// ==================================================
// RISK ASSESSMENT PROJECT SLIDER
// ==================================================

const riskSlides = document.querySelectorAll(
  ".risk-slide"
);

const riskDots = document.querySelectorAll(
  ".risk-dot"
);

const riskPrev = document.querySelector(
  ".risk-slider-btn.prev"
);

const riskNext = document.querySelector(
  ".risk-slider-btn.next"
);

let currentRiskSlide = 0;


function showRiskSlide(index) {

  if (!riskSlides.length) return;


  // Loop forward
  if (index >= riskSlides.length) {
    index = 0;
  }


  // Loop backward
  if (index < 0) {
    index = riskSlides.length - 1;
  }


  currentRiskSlide = index;


  // Remove active slide
  riskSlides.forEach((slide) => {
    slide.classList.remove("active");
  });


  // Remove active dots
  riskDots.forEach((dot) => {
    dot.classList.remove("active");
  });


  // Activate selected slide
  riskSlides[currentRiskSlide]?.classList.add("active");

  riskDots[currentRiskSlide]?.classList.add("active");
}


// NEXT

riskNext?.addEventListener("click", () => {

  showRiskSlide(currentRiskSlide + 1);

});


// PREVIOUS

riskPrev?.addEventListener("click", () => {

  showRiskSlide(currentRiskSlide - 1);

});


// DOT NAVIGATION

riskDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showRiskSlide(index);

  });

});


// INITIALIZE

if (riskSlides.length > 0) {

  showRiskSlide(0);

}

// ==================================================
// TRAINING SLIDERS
// ==================================================

const trainingSliders =
  document.querySelectorAll("[data-training-slider]");


trainingSliders.forEach((slider) => {

  const slides =
    slider.querySelectorAll(".training-slide");

  const dots =
    slider.querySelectorAll(".training-dot");

  const prev =
    slider.querySelector(".training-prev");

  const next =
    slider.querySelector(".training-next");


  let currentSlide = 0;


  function showTrainingSlide(index) {

    if (!slides.length) return;


    // Loop forward

    if (index >= slides.length) {
      index = 0;
    }


    // Loop backward

    if (index < 0) {
      index = slides.length - 1;
    }


    currentSlide = index;


    // Remove active state

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });


    dots.forEach((dot) => {
      dot.classList.remove("active");
    });


    // Activate selected slide

    slides[currentSlide]?.classList.add("active");

    dots[currentSlide]?.classList.add("active");

  }


  // Previous

  prev?.addEventListener("click", () => {

    showTrainingSlide(currentSlide - 1);

  });


  // Next

  next?.addEventListener("click", () => {

    showTrainingSlide(currentSlide + 1);

  });


  // Dots

  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      showTrainingSlide(index);

    });

  });


  // Initialize

  if (slides.length > 0) {

    showTrainingSlide(0);

  }

});

// ==================================================
// MOBILE MENU
// ==================================================

menuBtn?.addEventListener("click", () => {

  const isOpen = nav.classList.toggle("open");


  menuBtn.classList.toggle(
    "active",
    isOpen
  );


  menuBtn.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});


navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuBtn?.classList.remove("active");

    menuBtn?.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});



// ==================================================
// SCROLL REVEAL ANIMATION
// ==================================================

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(
          entry.target
        );

      }

    });

  },

  {
    threshold: 0.12,
  }

);


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    revealObserver.observe(element);

  });



// ==================================================
// ACTIVE NAVIGATION SECTION
// ==================================================

const sectionObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;


      navLinks.forEach((link) => {

        link.classList.toggle(

          "active",

          link.getAttribute("href") ===
            `#${entry.target.id}`

        );

      });

    });

  },

  {
    rootMargin: "-35% 0px -55% 0px",

    threshold: 0,
  }

);


sections.forEach((section) => {

  sectionObserver.observe(section);

});



// ==================================================
// FOOTER YEAR
// ==================================================

const year = document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}