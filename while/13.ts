export default function loop(a: number) {
  let k, sum: number;
  k = 0;
  sum = 0;
  while (sum < a) {
    k = k + 1;
    sum = parseFloat((sum + 1 / k).toFixed(6));
  }
  return [k, parseFloat(sum.toFixed(5))];
}
