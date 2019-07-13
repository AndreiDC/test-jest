export default function loop(n: number) {
  let result: number;
  result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + Math.pow(i, i);
  }
  return result;
}
