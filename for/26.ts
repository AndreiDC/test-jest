import { parse } from "querystring";

/*A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression

X − X3/3 + X5/5 − … + (−1)N·X2·N+1/(2·N+1).

The result is an approximate value of atan(X).*/

export default function loop(x, n: number) {
  let result, power, semn, man: number;
  semn = x;
  result = x;
  power = x * x;
  for (let i = 2; i <= n + 1; i++) {
    semn = -semn * power;
    result = Number((result + semn / (2 * i - 1)).toFixed(8));
  }
  return result;
}
