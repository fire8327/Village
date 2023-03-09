const swiper = new Swiper('.swiper-territory', {
    navigation: {
      nextEl: '.territory-next',
      prevEl: '.territory-prev',
    },
});
const swiper2 = new Swiper('.swiper-transport', {
    navigation: {
      nextEl: '.transport-next',
      prevEl: '.transport-prev',
    },
});
const swiper3 = new Swiper('.swiper-tokyo', {
    navigation: {
      nextEl: '.tokyo-next',
      prevEl: '.tokyo-prev',
    },
});
const swiper4 = new Swiper('.swiper-bergen', {
    navigation: {
      nextEl: '.bergen-next',
      prevEl: '.bergen-prev',
    },
});
const swiper5 = new Swiper('.swiper-newyork', {
    navigation: {
      nextEl: '.newyork-next',
      prevEl: '.newyork-prev',
    },
});
const swiper6 = new Swiper('.swiper-choice', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper7 = new Swiper('.swiper-room', {
  navigation: {
    nextEl: '.room-next',
    prevEl: '.room-prev',
  },
  pagination: {
    el: '.room-pagination',
    type: 'bullets',
  },
});