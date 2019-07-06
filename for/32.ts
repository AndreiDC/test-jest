/* An integer N (> 0) is given. A sequence of real numbers AK is defined as:

A0 = 1,        AK = (AK−1 + 1)/K,    K = 1, 2, … . */

export default function loop(n: number) {
  let result = [];
  result[0] = 1;
  for (let i = 1; i <= n; i++) {
    result[i] = parseFloat(((result[i - 1] + 1) / i).toFixed(2));
  }
  return result.splice(1, n);
}
