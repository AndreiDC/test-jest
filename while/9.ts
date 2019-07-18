export default function loop(n: number) {
  let k: number;
  k = 1;
  while (3 * k >= n) {
    k++;
  }
  return k;
}
