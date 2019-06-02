/* Given two integers A and B (A < B), find the sum of squares of all integers in the range A to B inclusive.*/

export default function suSqAl(a, b) {
  let sumSqu: number;
  sumSqu = 0;
  for (let i = a; i <= b; i++) {
    sumSqu = sumSqu + Math.pow(i, 2);
  }
  return sumSqu;
}
