const button = document.querySelector('button');

button.addEventListener('click', eventHandler);

function eventHandler(e) {
  const firstValue = +document.querySelector('#firstValue').value;
  const secondValue = +document.querySelector('#secondValue').value;
  const sign = document.querySelector('#sign').value;
  const answer = document.querySelector('h1');

  calc(firstValue, sign, secondValue).then(v => {
    answer.innerText = Number.isNaN(v) ? 0 : v;
  });
}

async function calc(n1, s, n2) {
  switch (s) {
    case 'plus':
      return plus(n1, n2);
    case 'minus':
      return minus(n1, n2);
    case 'divide':
      return divide(n1, n2);
    case 'multiply':
      return multiply(n1, n2);
  }
}

function plus(n1, n2) {
  return n1 + n2;
}

function minus(n1, n2) {
  return n1 - n2;
}
function divide(n1, n2) {
  return n1 / n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}