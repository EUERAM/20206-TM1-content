const swiper = new Swiper(".swiper", {
  slidesPerView: 3, // Number of slides to show
  spaceBetween: 30,
  //effect: "coverflow", //effect: "fade", "cube", "coverflow", "flip"
  // Optional parameters
  direction: "horizontal",
  loop: true, // Enable continuous loop mode
  autoplay: {
    delay: 2500, // Delay between transitions (in milliseconds)
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
