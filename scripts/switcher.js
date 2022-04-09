const switcherMobileMenu = document.querySelector ('.mobile-menu__theme-switch .switcher__input');
const switcherFooter = document.querySelector ('.footer__theme-switch .switcher__input');


function toggleSwitcher(evt) {
  const switcherPseudo = evt.target.nextElementSibling;

  switcherPseudo.classList.toggle('switcher__pseudo-input_checked');
}

switcherMobileMenu.addEventListener('change', toggleSwitcher);
switcherFooter.addEventListener('change', toggleSwitcher);