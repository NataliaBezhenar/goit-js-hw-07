const selectedById = document.querySelector("#categories");
const categoriesChildren = document.querySelectorAll("#categories .item");
console.log("В списке", categoriesChildren.length, "категории.");

categoriesChildren.forEach((element) => {
  console.log("Категория:", element.querySelector("h2").textContent);
  console.log(
    "Количество элементов:",
    element.querySelector("ul").children.length
  );
});
