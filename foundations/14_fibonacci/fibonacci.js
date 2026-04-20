const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  } else if (num <= 2) {
    // first two will always be 1
    return 1;
  }
  let fib = [1, 1];
  for (let i = 3; i <= num; i++) {
    fib.push(fib[i - 2] + fib[i - 3]);
  }
  return fib[fib.length - 1];
};

// Do not edit below this line

module.exports = fibonacci;
