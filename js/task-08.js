const boxesContainer = document.getElementById("boxes");
const input = document.querySelector("#controls input");
const buttons = document.querySelectorAll("#controls button");
let inputValue = 0;

function createBoxes(amount) {
  let side = 30;
  for (let i=0; i<amount; i++) {
    const div = document.createElement("div");
    div.style.width = side + "px";
    div.style.height = side + "px";
    div.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    boxesContainer.appendChild(div);
    side += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  input.value = "";
}


input.addEventListener("input", function () {
  inputValue = input.value;
});

buttons.forEach((b) => {
  b.addEventListener("click", function () {
    if (b.getAttribute("data-action") === "render") {
      createBoxes(inputValue);
    } else if (b.getAttribute("data-action") === "destroy") {
      destroyBoxes();
    }
  });
});
