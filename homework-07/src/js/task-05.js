const input = document.querySelector('#name-input');

input.addEventListener('input', event => {
  const span = document.querySelector('#name-output');
  if (event.target.value) {
    span.textContent = event.target.value;
  } else {
    span.textContent = 'незнакомец';
  }
});
