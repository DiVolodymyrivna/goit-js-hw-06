
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить
//  значення кольору в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;

const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};

changeColorBtn.addEventListener('click', changeColor);