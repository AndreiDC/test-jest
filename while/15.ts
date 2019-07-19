export default function loop(p: number) {
  let sum, k, d: number;
  sum = 1000;
  k = 0;
  d = 1;
  while (sum < 1100) {
    d = (p * sum) / 100;
    sum = parseFloat((sum + d).toFixed(3));
    k = k + 1;
  }
  return [k, parseFloat(sum.toFixed(2))];
}
