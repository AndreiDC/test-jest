export default function series(vec = [], n: number) {
  let newVec = [],
    k: number;
  k = 0;
  for (let i = 0; i <= n; i++) {
    if (vec[i] < vec[i + 1]) {
      newVec.push(vec[i]);
      k = k + 1;
    }
  }
  return [newVec, k];
}
