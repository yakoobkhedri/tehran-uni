// swiper

var banner = new Swiper(".banner", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var courses = new Swiper(".courses", {
  slidesPerView: 4.5,
  loop:true,
  spaceBetween: 22,
  breakpoints: {
    1200: {
      slidesPerView: 4.5,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});