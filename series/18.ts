export default function series(vec = [], n: number) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    if (vec[i] != vec[i + 1]) {
      ans.push(vec[i]);
    }
  }
  return ans;
}
