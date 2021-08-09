const divBoxes = document.querySelector('#boxes');
const input = document.querySelector('[type="number"]');
const divRender = document.querySelector('[data-action="render"]');
const divDestroy = document.querySelector('[data-action="destroy"]');
// console.dir(input);
// console.log(divRender);
// console.log(divDestroy);
let quantity = 0;
let divWidth = 30;
let divHeigth = 30;

function colorGen() {
  let color = '';
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return (color = 'rgb(' + r + ',' + g + ',' + b + ')');
}

function createBoxes(amount) {
  const arrDivs = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.background = colorGen();
    divWidth += 10;
    divHeigth += 10;
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeigth}px`;
    arrDivs.push(div);
  }
  return arrDivs;
}

divRender.addEventListener('click', () => {
  divBoxes.append(...createBoxes(Number(input.value)));
  console.log(divBoxes);
});

function destroyBoxes() {
  divBoxes.innerHTML = '';
  input.value = '';
}

divDestroy.addEventListener('click', () => {
  destroyBoxes();
});
