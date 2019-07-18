export default function loop(n: number) {
  let k: number;
  k = 1;
  while (k * k <= n) {
    k++;
  }
  return k - 1;
}
