// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = document.getElementById("ingredients");
let fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  fragment.appendChild(items);
});

ingredientsList.appendChild(fragment);
