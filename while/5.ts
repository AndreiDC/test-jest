export default function loop(n: number) {
  let k, r: number;
  k = 2;
  r = 0;
  while (k <= n) {
    k = k * 2;
    r = r + 1;
  }
  return r;
}
