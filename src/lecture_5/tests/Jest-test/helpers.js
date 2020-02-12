const makeRandomId = () =>
  Math.random()
    .toString(36)
    .substring(2, 10);

const calc = async (n1, s, n2) => {
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
};
const plus = (n1, n2) => {
  return n1 + n2;
};

const minus = (n1, n2) => {
  return n1 - n2;
};
const divide = (n1, n2) => {
  return n1 / n2;
};
const multiply = (n1, n2) => {
  return n1 * n2;
};

module.exports = {
  makeRandomId,
  calc,
  plus,
  minus,
  divide,
  multiply
};

// export default {
//   makeRandomId,
//   calc,
//   plus,
//   minus,
//   divide,
//   multiply
// };
