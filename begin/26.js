/*Given an independent variable x, find the value of a function y = 4(x−3)^6 − 7(x−3)^3 + 2.*/
function findValY(x) {
  let y=1, x1=1, x2=1;
  x1 = x - 3;
  x2 = x - 3;
  y = 4 * Math.pow(x1, 6) - (7 * Math.pow(x2, 3) + 2);
  return y;
}
module.exports = findValY;
