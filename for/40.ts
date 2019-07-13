export default function loop(a, b: number) {
  let res = [],
    n: number;
  res[1] = a;
  n = b - a;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      res.push(a + i);
    }
  }
  return res.slice(1);
}
