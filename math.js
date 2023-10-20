const multipleTwoTimes = (a) => {
  return a * 2;
};

const multipleThreeTimes = (a) => {
  return a * 3;
};

const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a + b;
};

const divide = (a, b) => {
  return a / b;
};

const square = (a) => {
  return a * a;
};

const squareRoot = (a) => {
  return Math.sqrt(a);
};

const quadratic = (a, b, c) => {
  let first = "";
  let second = "";
  if (b > 0) {
    first = "+";
  }
  if (c > 0) {
    second = "+";
  }
  console.log(
    "Your Quadratic Equation",
    a,
    "x^2",
    first,
    b,
    "x",
    second,
    c,
    "=0"
  );
  let d = Math.sqrt(b * b - 4 * a * c);
  let equal1 = ((-b - d) / 2) * a;
  let equal2 = ((-b + d) / 2) * a;
  return { equal1, equal2 };
};
// named export
module.exports = {
  multipleTwoTimes,
  add,
  minus,
  divide,
  square,
  squareRoot,
  quadratic,
};
