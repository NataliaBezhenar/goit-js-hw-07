const input = document.querySelector("input#name-input");
const userName = document.querySelector("span#name-output");
const isEmpty = (str) => !str.trim().length;

input.addEventListener("input", function (e) {
  if (isEmpty(this.value)) {
    userName.textContent = "незнакомец";
    return;
  }
  userName.textContent = e.target.value;
});
