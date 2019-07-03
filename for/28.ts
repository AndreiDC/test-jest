/* . A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression

1 + X/2 − 1·X2/(2·4) + 1·3·X3/(2·4·6) − … +
+ (−1)N−1·1·3·…·(2·N−3)·XN/(2·4·…·(2·N)).

The result is an approximate value of the square root of 1 + X. */

export default function loop(x, n: number) {
  let result, np, ni, semn: number;
  semn = 1;
  result = 1;
  ni = 1;
  np = 1;
  for (let i = 1; i <= n; i++) {
    np = np * (2 * i);
    result = parseFloat(
      (result + (semn * ni * Math.pow(x, i)) / np).toFixed(8)
    );
    semn = -semn;
    ni = ni * (2 * i - 1);
  }
  return result;
}
