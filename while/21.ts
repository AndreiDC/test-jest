export default function loop(n) {
  let m: number, ansver: boolean;
  while (n > 0 || m % 2 == 1) {
    ansver = m % 2 == 1;
    m = n % 10;
    n = Math.trunc(n / 10);
  }
  return ansver;
}
