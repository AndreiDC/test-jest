export default function loop(a, b, n: number) {
  let h, res: number;
  let result = [1.6];
  for (let i = 1; i <= n; i++) {
    h = (b - a) / n;
    res = parseFloat((a + i * h).toFixed(5));
    result.push(res);
  }
  return result;
}
