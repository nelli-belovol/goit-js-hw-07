const inputSizeControl = document.querySelector('#font-size-control');

inputSizeControl.addEventListener('change', event => {
  const span = document.querySelector('#text');
  span.style.fontSize = '16px';
  span.style.fontSize = `${event.target.value}px`;
});
