/* 
A real number X (|X| < 1) and an integer N (> 0) are given. Compute the expression

X + 1·X3/(2·3) + 1·3·X5/(2·4·5) + … +
+ 1·3·…·(2·N−1)·X2·N+1/(2·4·…·(2·N)·(2·N+1)).

The result is an approximate value of asin(X).
*/

export default function loop(x, n: number) {
  let result, power, pas: number;
  result = x;
  power = x * x;
  pas = x;
  for (let i = 2; i <= n; i++) {
    pas = (pas * power * (2 * i - 3)) / (2 * i - 2);
    result = parseFloat((result + pas / (2 * i - 1)).toFixed(8));
  }
  return result;
}
