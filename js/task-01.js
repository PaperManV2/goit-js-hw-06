const mainCategoryList = document.getElementById("categories");
const numberOfMainCategories = mainCategoryList.getElementsByClassName("item");
console.log(`Number of categories: ${numberOfMainCategories.length}`);
var h2TagValue;
var liTagsNumber;

for (var i = 0; i < numberOfMainCategories.length; i++) {
  h2TagValue =
    numberOfMainCategories[i].getElementsByTagName("h2")[0].textContent;
  liTagsNumber = numberOfMainCategories[i].getElementsByTagName("li").length;
  console.log("Category: " + h2TagValue);
  console.log("Elements: " + liTagsNumber);
}
