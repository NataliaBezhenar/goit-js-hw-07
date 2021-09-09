const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulEl = document.getElementById("ingredients");

const listItems = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  return liEl;
});

ulEl.append(...listItems);
