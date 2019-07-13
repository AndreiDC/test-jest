export default function loop(n: number) {
  let result, r: number;
  result = 0;
  r = n;
  for (let i = 1; i <= n; i++) {
    result = result + Math.pow(i, r);
    r = r - 1;
  }
  return result;
}
