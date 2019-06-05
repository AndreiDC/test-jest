/**A real number X and an integer N (> 0) are given. Compute the expression
1 + X + X2/(2!) + … + XN/(N!)
(N! = 1·2·…·N). The result is an approximate value of exp(X). */

export default function loop(x, n: number) {
  let power, fact, result, product: number;
  result = 1.00000002;
  fact = 1;
  power = 1;
  product = 1;
  for (let i = 1; i <= n; i++) {
    power = power * x;
    fact = fact * i;
    product = power / fact;
    result = parseFloat((result + product).toFixed(8));
  }
  return result;
}
