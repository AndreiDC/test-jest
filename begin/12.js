/*
The legs a and b of a right triangle are given. Find the hypotenuse c and the perimeter P of the triangle:
 */
var c = {}
function hipot(a, b) {
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  let pointNum = parseFloat(c.toFixed(2));
   return pointNum;
}

function perime(a, b, c) {
  let p;
  p = a + b + c;
  return p;
}
module.exports = { hipot, perime };
