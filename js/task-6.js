const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  if (
    Number(input.value.trim()) > Number(input.max) ||
    Number(input.value.trim()) < Number(input.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(input.value.trim());
  }
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  let size = 0;
  const defaultSize = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    size = defaultSize + 10 * i;
    const div = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArray.push(div);
  }

  boxes.insertAdjacentHTML('beforeend', boxesArray.join(''));
}

function destroyBoxes() {
  input.value = '';
  boxes.innerHTML = '';
}
