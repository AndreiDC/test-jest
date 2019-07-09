/* An integer N (> 0) is given. An integer-valued sequence of the Fibonacci numbers FK is defined as:
F1 = 1,        F2 = 1,        FK = FK−2 + FK−1,    K = 3, 4, … .  */
export default function loop(n: number) {
  let a = [];
  a[0] = 1;
  for (let i = 1; i <= n; i++) {
    a[i] = parseFloat(((a[i - 1] + 1) / i).toFixed(2));
  }
  return a.splice(1, n);
}
