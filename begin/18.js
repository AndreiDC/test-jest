/*Three points A, B, C are given on the real axis,
 the point C is located between the points A and B. 
 Find the product of the length of AC and the length of BC.*/
function pr3Point(a, c, b) {
  let l1, l2, l3;
  l1 = c - a;
  l2 = b - c;
  l3 = l1 * l2;
  return parseFloat(l3.toFixed(2));
}
module.exports = pr3Point;

