const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', e => {
  if (e.target.value.length == inputValidation.dataset.length) {
    inputValidation.classList.remove('invalid');
    inputValidation.classList.add('valid');
  } else {
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
  }
});
