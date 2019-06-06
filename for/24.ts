import { ftruncate } from "fs";

/* A real number X and an integer N (> 0) are given. Compute the expression
1 − X2/(2!) + X4/(4!) − … + (−1)N·X2·N/((2·N)!)
(N! = 1·2·…·N). The result is an approximate value of cos(X). */

export default function loop(x, n: number) {
  let result, fact, power, prod, sem: number;
  result = 1;
  fact = 1;
  power = 1;
  prod = 1;
  sem = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    power = power * x;
    if (i % 2 == 0) {
      prod = power / fact;
      sem = -sem;
      result = parseFloat((result + prod * sem).toFixed(8));
    }
  }
  return result;
}
