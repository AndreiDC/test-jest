export default function loop(n: number) {
  let a = [];
  a[1] = 1;
  a[2] = 2;
  a[3] = 3;
  for (let i = 4; i <= n; i++) {
    a[i] = a[i - 1] + a[i - 2] - 2 * a[i - 3];
  }
  return a.splice(1, n);
}
