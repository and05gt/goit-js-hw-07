const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', setOutput);

function setOutput(e) {
  const inputValue = e.currentTarget.value.trim();

  output.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}
