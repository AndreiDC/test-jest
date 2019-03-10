/*
Given the length L of a circumference, find the radius R and the area S of the circle.
 Take into account that L = 2·π·R,    S = π·R^2. Use 3.14 for a value of π.
*/
var r;
function radius(a) {
  r = a / (2 * 3.14);
  return parseFloat(r.toFixed(2));
}

function areaCircle(r) {
let s;
s = 3.14 * Math.pow(r,2);
return parseFloat(s.toFixed(2));
}
module.exports = {radius,areaCircle};