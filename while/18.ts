export default function loop(n: number) {
  let amo, sum: number;
  sum = 0;
  amo = 0;
  while (n > 0) {
    sum = sum + (n % 10);
    n = Math.trunc(n / 10);
    amo = amo + 1;
  }
  return [amo, sum];
}
