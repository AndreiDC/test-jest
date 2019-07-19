export default function loop(p: number) {
  let sum, k, d: number;
  sum = 10;
  k = 1;
  d = 10;
  while (sum <= 200) {
    d = d + (d * p) / 100;
    sum = parseFloat((sum + d).toFixed(4));
    k = k + 1;
  }
  return [k, parseFloat(sum.toFixed(3))];
}
