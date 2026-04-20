const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => num + acc, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => num * acc, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let acc = 1;
  for (let i = num; i > 0; i--) {
    acc *= i;
    console.log(i);
  }
  return acc;
};

factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
