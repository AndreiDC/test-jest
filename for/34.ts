export default function loop(n: number) {
  let f = [];
  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i <= n; i++) {
    f[i] = parseFloat(((f[i - 2] + 2 * f[i - 1]) / 3).toFixed(3));
  }
  return f.splice(1, n);
}
