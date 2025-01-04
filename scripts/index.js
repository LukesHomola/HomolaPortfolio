document.addEventListener("DOMContentLoaded", function () {
  // Initialize the preview slider
  var previewSlider = new Splide(".preview-slider", {
    type: "loop",
    snap: true,
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 15000,
    speed: 100,
    arrows: false,
    focus: "left",
    gap: 20,
    pagination: false,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  }).mount();

  // Initialize the full-width slider
  var fullWidthSlider = new Splide(".full-width-slider", {
    type: "fade",
    drag: true,
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,
    gap: 0,
    cover: true,
  }).mount();

  // Sync the full-width slider with the preview slider
  previewSlider.sync(fullWidthSlider);

  // Initialize the inner slider for ticket system
  var innerSliderTicketSystem = new Splide(".innerSliderTicketSystem-slider", {
    type: "fade",
    drag: true,
    snap: true,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    speed: 600,
    waitForTransition: true,
    arrows: true,
    pagination: true,
    rewind: true,
  }).mount();

  // Initialize the inner slider for WynnPedia
  var innerSliderWynnPedia = new Splide(".innerSliderWynnPedia-slider", {
    type: "fade",
    drag: true,
    snap: true,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    speed: 600,
    waitForTransition: true,
    arrows: true,
    pagination: true,
    rewind: true,
  }).mount();

  // Initialize the inner slider for Pradelna web
  var innerSliderWebPradelna = new Splide(".innerSliderWebPradelna-slider", {
    type: "fade",
    drag: true,
    snap: true,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    speed: 600,
    waitForTransition: true,
    arrows: true,
    pagination: true,
    rewind: true,
  }).mount();
});

// Initialize the aniamtions
/* SLIDE FROM LEFT */
const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInLeft");
    } else {
      entry.target.classList.remove("animate__animated");
      entry.target.classList.remove("animate__fadeInLeft");
    }
  });
});
const hiddenLeftElements = document.querySelectorAll(".hidden-left");
hiddenLeftElements.forEach((el) => {
  observerLeft.observe(el);
});

/* SLIDE FROM RIGHT */
const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInRight");
      entry.target.classList.add("animate-duration-2s");
    } else {
      entry.target.classList.remove("animate__animated");
      entry.target.classList.remove("animate__fadeInRight");
    }
  });
});
const hiddenRightElements = document.querySelectorAll(".hidden-right");
hiddenRightElements.forEach((el) => {
  observerRight.observe(el);
});

/* FADE IN */
const observerFadeIn = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeIn");
      entry.target.classList.add("animate-duration-2s");
    } else {
      entry.target.classList.remove("animate__animated");
      entry.target.classList.remove("animate__fadeIn");
    }
  });
});
const hiddenFadeInElements = document.querySelectorAll(".hidden-fadeIn");
hiddenFadeInElements.forEach((el) => {
  observerFadeIn.observe(el);
});
