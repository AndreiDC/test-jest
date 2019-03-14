/*Given an independent variable x, find the value of a function
 y = 3x^6 − 6x^2 − 7.*/
function findY(x) {
  let y = 1,
    x1,
    x2;
  x1 = 3 * x;
  x2 = 6 * x;
  y = Math.pow(x1, 2) - Math.pow(x2, 2) - 7;
  return y;
}
module.exports = { findY };
