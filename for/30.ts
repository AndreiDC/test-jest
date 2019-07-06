export default function loop(a, b, n: number) {
  let vec = [],
    h = 0,
    fa,
    fx: number;
  h = parseFloat(((b - a) / n).toFixed(5));
  for (let i = 0; i <= n; i++) {
    fa = parseFloat(a + i * h).toFixed(5);
    fx = parseFloat((1 - Math.sin(fa)).toFixed(5));
    vec.push(fx);
  }
  return [vec, h];
}
