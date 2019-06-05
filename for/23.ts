/*  A real number X and an integer N (> 0) are given. Compute the expression

X − X3/(3!) + X5/(5!) − … + (−1)N·X2·N+1/((2·N+1)!)

(N! = 1·2·…·N). The result is an approximate value of sin(X).*/

export default function loop(x, n: number) {
  let result, power, fact, prod, sem: number;
  result = 0;
  power = 1;
  fact = 1;
  prod = 1;
  sem = 1;
  for (let i = 1; i <= 2 * n + 1; i++) {
    power = power * x;
    fact = fact * i;
    if (i % 2 == 1) {
      prod = power / fact;
      result = parseFloat((result + prod * sem).toFixed(8));
      sem = -sem;
    }
  }
  return result;
}
