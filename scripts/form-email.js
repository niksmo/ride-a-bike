const formEmail = document.querySelector('.form-email');
const formTextInput = formEmail.querySelector('.form-email__input');
const submitBtn = formEmail.querySelector('.form-email__submit');

function toggleSubmitBtn() {
  submitBtn.classList.toggle(`form-email__submit_hidden`);
}

function hideSubmitBtn() {
  setTimeout(toggleSubmitBtn, 100)
}

function disableInput(el) {
  el.disabled = true;
  el.style.cursor = 'default';
}

function submitEmail(evt) {
  evt.preventDefault();
  if (formTextInput.value) {
    formTextInput.value = 'Круто!';
    disableInput(formTextInput);
  } else {
    return;
  }
}

formTextInput.addEventListener('focus', toggleSubmitBtn);
formTextInput.addEventListener('blur', hideSubmitBtn);

formEmail.addEventListener('submit', submitEmail);