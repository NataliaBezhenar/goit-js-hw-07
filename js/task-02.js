const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.getElementById('ingredients');


  for (const el of ingredients) {
    const liEl = document.createElement("li");
    liEl.appendChild(document.createTextNode(el));
    ulEl.appendChild(liEl);
  }