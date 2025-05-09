// tab

let tab = Array.from(document.querySelectorAll('.tab'));
let tab2 = Array.from(document.querySelectorAll('.tab2'));
let tab3 = Array.from(document.querySelectorAll('.tab3'));
let tab4 = Array.from(document.querySelectorAll('.tab4'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let tabContent2 = Array.from(document.querySelectorAll('.tabContent2 > div'));
let tabContent3 = Array.from(document.querySelectorAll('.tabContent3 > div'));
let tabContent4 = Array.from(document.querySelectorAll('.tabContent4 > div'));

tab.forEach((item) => {
  item.addEventListener('click', function() {
    tab.forEach((items) => {items.classList.remove('active')});
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
      })
  })
})
tab2.forEach((item) => {
  item.addEventListener('click', function() {
    tab2.forEach((items) => {items.classList.remove('active')});
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent2.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
      })
  })
})
tab3.forEach((item) => {
  item.addEventListener('click', function() {
    tab3.forEach((items) => {items.classList.remove('active')});
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent3.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('hidden');
              content.classList.add('grid');
          } else {
            content.classList.add('hidden');
            content.classList.remove('grid');
          }
      })
  })
})
tab4.forEach((item) => {
  item.addEventListener('click', function() {
    tab4.forEach((items) => {items.classList.remove('active')});
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent4.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('hidden');
              content.classList.add('grid');
          } else {
            content.classList.add('hidden');
            content.classList.remove('grid');
          }
      })
  })
})
// swiper

var banner = new Swiper(".banner", {
  loop: true,
  // autoplay: true,
  spaceBetween: 90,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var courses = new Swiper(".courses", {
  slidesPerView: 1.2,
  loop:true,
  spaceBetween: 22,
  breakpoints: {
    630: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 4.5,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var courses2 = new Swiper(".courses2", {
  slidesPerView: 1.2,
  loop:true,
  spaceBetween: 22,
  breakpoints: {
    630: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 4.5,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
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
  spaceBetween: 8,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 38,
    }
  },
  pagination: {
    el: ".swiper-pagination4",
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
  spaceBetween: 40,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
    }
  },
});
var gerayesh = new Swiper(".gerayesh", {
  slidesPerView: 1,
  loop:true,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));
let acordionBtn2 = Array.from(document.getElementsByClassName('acordionBtn2'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
acordionBtn2.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})