
const resultInput = document.querySelector('input');
const submitButton = document.querySelector('input[type=submit]');

// What happens when you click a button on the calculator.
function onButtonClick(event) {
  const char = event.target.innerText;
  if (resultInput.value === 'FOUT!') resultInput.value = '';
  resultInput.value += char;
}

// Bind the function to all buttons.
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', onButtonClick);
});

// What happens when you click the calculate button.
async function onCalculateClick() {
  const sumParts = resultInput.value.split('+');
  if (sumParts.length !== 2) {
    resultInput.value = 'FOUT!';
    return;
  }

  submitButton.disabled = true;

  const resultRaw = await fetch('/add?a=' + sumParts[0] + '&b=' + sumParts[1]);
  const result = await resultRaw.json();

  resultInput.value = result.result;
  submitButton.disabled = false;
}

// Bind the function to the calculate button
submitButton.addEventListener('click', onCalculateClick);
