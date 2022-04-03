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
  navigation: {
    nextEl: '.controls__arrow_right',
    prevEl: '.controls__arrow_left',
  }
});

// const titles = document.querySelectorAll('.landing-third__title');
// const paragraphs = document.querySelectorAll('.landing-third__paragraph');
// const labels = document.querySelectorAll('.landing-third__label');

// function nextText () {
//   let i = Number;

//   titles.forEach(function (item, index) {
//     if (!item.classList.contains('title_hidden')) {
//       return i = index;
//     }
//   });

//   if ((i+1) <= (titles.length - 1)) {
//     titles[i].classList.toggle('title_hidden');
//     titles[i+1].classList.toggle('title_hidden');
//     paragraphs[i].classList.toggle('paragraph_hidden');
//     paragraphs[i+1].classList.toggle('paragraph_hidden');
//     labels[i].classList.toggle('label_hidden');
//     labels[i+1].classList.toggle('label_hidden');

//   } else {
//     titles[i].classList.toggle('title_hidden');
//     titles[0].classList.toggle('title_hidden');
//     paragraphs[i].classList.toggle('paragraph_hidden');
//     paragraphs[0].classList.toggle('paragraph_hidden');
//     labels[i].classList.toggle('label_hidden');
//     labels[0].classList.toggle('label_hidden');
//   };
// }

// function prevText () {
//   let i = Number;

//   titles.forEach(function (item, index) {
//     if (!item.classList.contains('title_hidden')) {
//       return i = index;
//     }
//   });

//   if ((i-1) >= 0) {
//     titles[i].classList.toggle('title_hidden');
//     titles[i-1].classList.toggle('title_hidden');
//     paragraphs[i].classList.toggle('paragraph_hidden');
//     paragraphs[i-1].classList.toggle('paragraph_hidden');
//     labels[i].classList.toggle('label_hidden');
//     labels[i-1].classList.toggle('label_hidden');

//   } else {
//     titles[i].classList.toggle('title_hidden');
//     titles[(titles.length - 1)].classList.toggle('title_hidden');
//     paragraphs[i].classList.toggle('paragraph_hidden');
//     paragraphs[(titles.length - 1)].classList.toggle('paragraph_hidden');
//     labels[i].classList.toggle('label_hidden');
//     labels[(titles.length - 1)].classList.toggle('label_hidden');
//   };
// }

// const nextSlide = document.querySelector('.controls__arrow_right');
// const prevSlide = document.querySelector('.controls__arrow_left');

// nextSlide.addEventListener('click', nextText);
// prevSlide.addEventListener('click', prevText);