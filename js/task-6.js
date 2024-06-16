function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const createDiv = document.createElement("div");
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.gap = "44px";

createBtn.addEventListener("click", () => {
  if (Number(inputNumber.value.trim()) > Number(inputNumber.max) || Number(inputNumber.value.trim()) < Number(inputNumber.min)) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(inputNumber.value.trim());
  }
  inputNumber.value = "";
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  let size = 0;
  const defaultSize = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size = defaultSize + (10 * i);
    const div = `<div style="display: block; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  boxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

function destroyBoxes() {
  inputNumber.value = "";
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);