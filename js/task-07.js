const input = document.getElementById("font-size-control");
const output = document.getElementById("text");
output.style.fontSize = input.value + "px";

input.addEventListener("input", () => {
  output.style.fontSize = input.value + "px";
});
