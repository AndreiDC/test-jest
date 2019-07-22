export default function loop(n: number) {
  let f1, f2, k: number;
  f1 = 1;
  f2 = 1;
  k = 2;
  while (n > f2) {
    f2 = f2 + f1;
    f1 = f2 - f1;
    k++;
  }
  return k;
}
