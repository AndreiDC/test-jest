/* A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression
X − X2/2 + X3/3 − … + (−1)N−1·XN/N.
The result is an approximate value of ln(1 + X). */

export function loop(x, n: number) {
  let result, power, semn: number;
  result = 0;
  power = 1;
  semn = -1;
  for (let i = 1; i <= n; i++) {
    power = power * x;
    semn = -semn;
    result = parseFloat((result + (semn * power) / i).toFixed(4));
  }
  return result;
}
