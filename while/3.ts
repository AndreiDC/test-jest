export default function loop(n, k: number) {
  let q: number;
  q = 0;
  while (n > k) {
    n = n - k;
    q++;
  }
  return [q, n];
}
