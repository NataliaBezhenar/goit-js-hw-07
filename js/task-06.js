const input = document.querySelector("#validation-input");
const numberOfSymbols = parseInt(input.getAttribute("data-length"));

input.addEventListener("focusout", function () {
  if (input.value.length === numberOfSymbols) {
    clearStyles("invalid");
    addStyles("valid");
  } else {
    clearStyles("valid");
    addStyles("invalid");
  }
});

function clearStyles(style) {
  input.classList.remove(style);
}

function addStyles(style) {
  input.classList.add(style);
}
