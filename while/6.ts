export default function loop(n: number) {
  let result, i: number;
  i = 1;
  result = 1;
  while (i <= n) {
    result = result * i;
    i = i * 2;
  }
  return result;
}
