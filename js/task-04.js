let counterValue = parseInt(document.getElementById("value").textContent);

const buttons = document.getElementsByTagName("button");


[...buttons].forEach((element) => {
  element.addEventListener("click", () => {
    if (element.getAttribute("data-action") === "increment") {
      counterValue = increment(counterValue);
    } else {
      counterValue = decrement(counterValue)
    }
    document.getElementById("value").textContent = counterValue;
  });
});

function increment(val) {
  return ++val;
}
function decrement(val) {
  return --val;
}
