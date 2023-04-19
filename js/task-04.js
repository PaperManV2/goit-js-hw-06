const currentValue = document.getElementById("value");
const decrementation = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementation = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;
currentValue.textContent = counterValue;

incrementation.addEventListener("click", () => {
  counterValue++;
  currentValue.textContent = counterValue;
});
decrementation.addEventListener("click", () => {
  counterValue--;
  currentValue.textContent = counterValue;
});
