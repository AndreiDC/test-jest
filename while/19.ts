export default function loop(n: number) {
  let m: number;
  m = 0;
  while (n > 0) {
    m = 10 * m + (n % 10);
    n = Math.trunc(n / 10);
  }
  return m;
}
