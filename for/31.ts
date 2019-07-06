export default function loop(n: number) {
  let vec = [],
    result: number;
  result = 2;
  for (let i = 1; i <= n; i++) {
    result = parseFloat(2 + (1 / result).toFixed(3));
    vec.unshift(result);
  }
  return result;
}
