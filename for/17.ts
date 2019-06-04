/* A real number a and an integer (n > 0 ) are given.
using one loop-statement compute the sum */

export default function loop(a, n: number) {
  let result, p: number;
  result = 1;
  p = 1;
  for (let i = 1; i <= n; i++) {
    p = p * a;
    result = result + p;
  }
  return result;
}
