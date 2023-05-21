const swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  },
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.controls__arrow_right',
    prevEl: '.controls__arrow_left',
  }
});

const swiperHighway = new Swiper('.bikes-slider_type_highway', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    enabled: false
  }
});

const swiperGravel = new Swiper('.bikes-slider_type_gravel', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    enabled: false
  }
});

const swiperTt = new Swiper('.bikes-slider_type_tt', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    enabled: false
  }
});