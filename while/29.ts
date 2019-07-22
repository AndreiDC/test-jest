export default function loop(E: number) {
  let a = [];
  a[1] = 1;
  a[2] = 2;
  let k = 3;
  a[k] = (a[k - 2] + 2 * a[k - 1]) / 3;

  while (Math.abs(a[k] - a[k - 1]) >= E) {
    k = k + 1;
    a[k] = (a[k - 2] + 2 * a[k - 1]) / 3;
  }
  a[k - 1] = parseFloat(a[k - 1].toFixed(6));
  a[k] = parseFloat(a[k].toFixed(6));
  return [a[k - 1], k, a[k]];
}
