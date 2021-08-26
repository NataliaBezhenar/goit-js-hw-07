
const selectedById = document.querySelector('#categories');
const categoriesChildren = selectedById.children
console.log('В списке', categoriesChildren.length, 'категории.')

for (const el of categoriesChildren){
  console.log('Категория:', el.querySelector('h2').textContent)
  console.log('Количество элементов:', el.querySelector('ul').children.length)
}
