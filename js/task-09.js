function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const hexTextPlace = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
let color;

btnChangeColor.addEventListener("click", () => {
  color = getRandomHexColor();
  hexTextPlace.textContent = color;
  document.querySelector("body").style.backgroundColor = color;
});
