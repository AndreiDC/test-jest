export default function series(vec = []) {
  let n: number;
  n = 0;
  for (let i = 1; i <= vec.length; i++) {
    if (vec[i] != 0) {
      n = n + 1;
    }
  }
  return n;
}
