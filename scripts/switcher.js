const page = document.querySelector('.page');
const switcherMobileMenu = page.querySelector ('.mobile-menu__theme-switch .switcher__input');
const switcherFooter = page.querySelector ('.footer__theme-switch .switcher__input');
const themeSwitchers = [switcherMobileMenu, switcherFooter];

function changeTheme() {
  page.classList.toggle('page_theme_light')
  page.classList.toggle('page_theme_dark')
}

function toggleThemeSwitcher(evt) {

  if (evt.target.checked) {
    themeSwitchers.forEach (function (item) {
      item.checked = true;
      item.nextElementSibling.classList.add('switcher__pseudo-input_checked')
    })
  } else if (!evt.target.checked) {
    themeSwitchers.forEach (function (item) {
      item.checked = false;
      item.nextElementSibling.classList.remove('switcher__pseudo-input_checked')
    })
  }

  changeTheme();
}

themeSwitchers.forEach((item) => item.addEventListener('change', toggleThemeSwitcher));