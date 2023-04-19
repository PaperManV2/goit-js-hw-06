const input = document.getElementById("name-input");
const nameSpace = document.getElementById("name-output");

input.addEventListener("input", () => {
  if (input.value == "") {
    nameSpace.textContent = "Annonymus";
  } else {
    nameSpace.textContent = input.value;
  }
});
