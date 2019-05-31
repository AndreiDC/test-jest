/* Given two integers A and B (A < B), find the sum of all integers in the range A to B inclusive.*/

export default function sumRange(a, b: number) {
  let sum: number;
  sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }
  return sum;
}
