export default function loop(n: number) {
  let m: number, ansver: boolean;
  while (n > 0 || m == 2) {
    ansver = m == 2;
    m = n % 10;
    n = Math.trunc(n / 10);
  }
  return ansver;
}
