const {
  multipleTwoTimes,
  add,
  minus,
  divide,
  square,
  squareRoot,
  quadratic,
} = require("./math");

console.log("Result 1: multiple =", multipleTwoTimes(2));
console.log("Result 2: add: =", add(2, 3));
console.log("Result 3: minus =", minus(3, 4));
console.log("Result 4: divide =", divide(4, 2));
console.log("Result 4: square =", square(3));
console.log("Result 4: squareRoot =", squareRoot(25));
console.log("---------------");
console.log("Result 4: quadratic =", quadratic(1, -5, -14));
