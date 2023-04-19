const input = document.getElementById("validation-input");
const condition = input.getAttribute("data-length");
let inputValue;

input.addEventListener("blur", () => {
  inputValue = input.value;
  if (inputValue.length == condition) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
