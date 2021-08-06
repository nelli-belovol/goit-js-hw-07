const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', e => {
  if (e.target.value.length == inputValidation.dataset.length) {
    inputValidation.classList.add('valid');
  } else {
    inputValidation.classList.add('invalid');
  }
});
