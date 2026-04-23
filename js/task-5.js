const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const textColor = document.querySelector('.color');

btn.addEventListener('click', handleChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeColor() {
  body.style.backgroundColor = textColor.textContent = getRandomHexColor();
}
