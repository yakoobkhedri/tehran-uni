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

var govahi = new Swiper(".govahi", {
  slidesPerView: 1,
  loop:true,
  spaceBetween: 22,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var testimonials = new Swiper(".testimonials", {
  slidesPerView: 1,
  loop:true,
  spaceBetween: 36,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var blog = new Swiper(".blog", {
  slidesPerView: 1,
  loop:true,
  spaceBetween: 50,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});