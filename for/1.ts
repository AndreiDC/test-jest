/* Given integers K and N (N > 0), output the number K N times. */
export default function repNum(k, n: number) {
  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = k;
  }
  return a;
}
