const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    output.textContent = currentTarget.value.trim();
  } else {
    output.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", getInputValue);