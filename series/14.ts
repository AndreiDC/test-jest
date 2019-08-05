export default function series(vec = [], k: number) {
  let n: number;
  n = 0;
  for (let i = 0; i <= vec.length; i++) {
    if (vec[i] < k && vec[i] != 0) {
      n = n + 1;
    }
  }
  return n;
}
