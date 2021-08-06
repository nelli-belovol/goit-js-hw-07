let span = document.querySelector('span');

//increment и decrement

let counterValue = 0;

function increment(value) {
  return (counterValue += value);
}

function decrement(value) {
  return (counterValue -= value);
}

const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');

buttonIncrement.addEventListener('click', () => {
  let value = increment(1);
  span.textContent = value;
});

buttonDecrement.addEventListener('click', () => {
  let value = decrement(1);
  span.textContent = value;
});
