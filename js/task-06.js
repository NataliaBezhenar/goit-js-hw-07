const input = document.querySelector("#validation-input");
const numberOfSymbols = parseInt(input.getAttribute("data-length"));

input.addEventListener("focusout", function () {
  if (input.value.length === numberOfSymbols) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
