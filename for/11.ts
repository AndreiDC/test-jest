/* 
Given an integer N (> 0), find the value of a following sum (as an integer):
N^2 + (N + 1)^2 + (N + 2)^2 + … + (2·N)^2.
 */

export default function followSum(n) {
  let sum: number;
  sum = 0;
  for (let i = n; i <= 2 * n; i++) {
    sum = sum + Math.pow(i, 2);
  }
  return sum;
}
