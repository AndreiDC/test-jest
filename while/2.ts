export default function loop(a, b: number) {
  let k: number;
  k = 0;
  while (a > b) {
    a = a - b;
    k++;
  }
  return k;
}
