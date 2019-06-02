/* Given an integer N (> 0), find the value of a following sum (as a real number):
1 + 1/2 + 1/3 + … + 1/N. */

export default function sum(n: number) {
  let s: number;
  s = 0;
  for (let i = 2; i <= n; i++) {
    s = parseFloat((s + 1 / i).toFixed(2));
  }
  return s;
}
