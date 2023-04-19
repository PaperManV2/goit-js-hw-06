const input = document.getElementById("font-size-control");
const output = document.getElementById("text");

input.addEventListener("input", () => {
  output.style.fontSize = input.value + "px";
});
