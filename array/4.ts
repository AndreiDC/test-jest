export default function array(n, a, r: number) {
  let arr = [],
    ans: number;
  ans = 1;
  arr[0] = a;
  for (let i = 1; i < n; i++) {
    ans = parseFloat((a * Math.pow(r, i)).toFixed(2));
    arr.push(ans);
  }
  return arr;
}
