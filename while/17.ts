export default function loop(n: number) {
  let out = [];
  while (n > 0) {
    out.push(n % 10);
    n = Math.trunc(n / 10);
  }
  return out;
}
