/* Given an integer N (> 0), find the value of a following product of N factors:
1.1 · 1.2 · 1.3 · … . */

export default function product(n: number) {
  let pr: number;
  pr = 1;
  for (let i = 1; i <= n; i++) {
    pr = parseFloat((pr * (1 + i / 10)).toFixed(6));
  }
  return pr;
}
