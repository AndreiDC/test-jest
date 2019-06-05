/* An integer N (> 0) is given. Using one loop-statement compute the sum
1 + 1/(1!) + 1/(2!) + 1/(3!) + … + 1/(N!),
where N! (N–factorial) is the product of all integers in the range 1 to N:  
  N! = 1·2·…·N. The result is an approximate value of the constant e = exp(1). */

export default function loop(n: number) {
  let result, fact, prod: number;
  fact = 1;
  prod = 1;
  result = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    prod = 1 / fact;
    result = parseFloat((result + prod).toFixed(8));
  }
  return result;
}
