export default function loop(n: number) {
  let k, re: number;
  k = 1;
  re = 0;
  while (3 * k < n) {
    k = k * 3;
    re = re + 1;
  }
  return re;
}
