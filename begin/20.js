/* 
The coordinates (x1, y1) and (x2, y2) of two points are given. Find the distance between the points:
Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

*/
function disTwopoint(x1, y1, x2, y2) {
  let distance;
  distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return parseFloat(distance.toFixed(2));
}
module.exports = disTwopoint;
