const burgerButton = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = mobileMenu.querySelector('.mobile-menu__close');

const navGrades = mobileMenu.querySelector('.mobile-menu__link_id_grades');
const navBikes = mobileMenu.querySelector('.mobile-menu__link_id_bikes');
const navTraining = mobileMenu.querySelector('.mobile-menu__link_id_training');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu_open');
}

const buttonsArray = [
  burgerButton,
  closeButton,
  navGrades,
  navBikes,
  navTraining
]

buttonsArray.forEach((item) => item.addEventListener('click', toggleMobileMenu));