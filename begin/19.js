/* The coordinates (x1, y1) and (x2, y2) of two opposite vertices of a rectangle are given.
 Sides of the rectangle are parallel to coordinate axes. Find the perimeter and the area of the rectangle. */
var x3, y3, siedeB, siedeA;
function detX3(x1, y1, x2, y2) {
  x3 = x2;

  return x3;
}
function detY3(x1, y1, x2, y2) {
  y3 = y1;
  return y3;
}

function detSidesA(x3, y3, x1, y1) {
  siedeA = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
  return parseFloat(siedeA.toFixed(2));
}

function detSidesB(x3, y3, x2, y2) {
  siedeB = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
  return siedeB;
}
function areaRectangle(siedeA, siedeB) {
  let a;
  a = siedeA * siedeB;
  return a;
}

function perimeterRectangle(siedeA, siedeB) {
  let p;
  p = 2 * (siedeA + siedeB);
  return p;
}
module.exports = [
  { detX3 },
  { detY3 },
  { detSidesA },
  { detSidesB },
  { areaRectangle },
  { perimeterRectangle }
];
