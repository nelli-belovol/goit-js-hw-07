const categories = document.querySelector('#categories');
const children = categories.children;
// console.log(categories);
console.log(`В списке ${children.length} категории.`);
const arrChildren = Array.from(children);
arrChildren.forEach(item => {
  const itemTitle = item.querySelector('h2');
  //   console.dir(itemTitle.textContent);
  const itemOfCategory = item.querySelectorAll('li');
  console.log(
    `Категория: ${itemTitle.textContent}, количество элементов: ${itemOfCategory.length}`
  );
});
