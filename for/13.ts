/* Given an integer N (> 0), find the value of the following expression of N terms with alternating signs:
1.1 − 1.2 + 1.3 − … . */

export default function sumDif(n: number) {
  let s, a: number;
  s = 0;
  a = -1;
  for (let i = 1; i <= n; i++) {
    a = -a;
    s = parseFloat((s + a * (1 + i / 10)).toFixed(2));
  }
  return s;
}
