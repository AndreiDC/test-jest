/* The coordinates (x1, y1), (x2, y2), (x3, y3) of the triangle vertices are given. 
Find the perimeter and the area of the triangle using the formula for distance between two points in the plane
 (see Begin20).  The area of a triangle with sides a, b, c can be found by Heron formula:
S = (p·(p − a)·(p − b)·(p − c))^1/2, where p = (a + b + c)/2 is the half-perimeter. */
var sa, sb, sc, p;
function sideA(x2, y2, x1, y1) {
  sa = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return parseFloat(sa.toFixed(2)); // return side A of triangle
}

function sideB(x1, y1, x3, y3) {
  sb = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
  return parseFloat(sb.toFixed(2)); // return side B of triangle
}

function sideC( x3, y3,x2, y2,) {
  sc = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
  return parseFloat(sc.toFixed(2)); // return side C of triangle
}
function perimeter(sa, sb, sc) {
  p = (sa + sb + sc) / 2;
  return parseFloat(p.toFixed(2)); // return perimeter of triangle
}

function area(sa, sb, sc, p) {
  let a;
  a = Math.sqrt(p * (p - sa) * (p - sb) * (p - sc)); // releturn area of triangle
  return parseFloat(a.toFixed(2));
}

module.exports = [{ sideA }, { sideB }, { sideC }, { perimeter }, { area }];
