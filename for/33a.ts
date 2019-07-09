export default function loop(n: number) {
  let f = [];
  f[1] = 1;
  f[2] = 1;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f.splice(1, n);
}
