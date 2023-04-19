const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

var arrayOfNewElements = [];
const htmlArray = document.getElementById("ingredients");

for (var i = 0; i < ingredients.length; i++) {
  arrayOfNewElements.push(document.createElement("li"));
  arrayOfNewElements[i].classList.add("item");
  arrayOfNewElements[i].textContent = ingredients[i];
}

htmlArray.append(...arrayOfNewElements);

console.log(arrayOfNewElements);
