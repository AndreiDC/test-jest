export default function series(vec = [], n: number) {
  let ans = [],
    k: number;
  k = 0;
  for (let i = 0; i <= n; i++) {
    if (vec[i] > vec[i + 1]) {
      ans.push(vec[i + 1]);
      k = k + 1;
    }
  }
  return [ans, k];
}
