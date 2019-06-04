/*An integer N (> 0) is given. Using one loop-statement compute the sum
1! + 2! + 3! + … + N!,
where N! (N–factorial) is the product of all integers in the range 1 to N: 
   N! = 1·2·…·N. To avoid the integer overflow, compute the sum using real variables and output the result as 
   a real number.*/

export default function loop(n: number) {
  let fact, result: number;
  fact = 1;
  result = 0;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    result = result + fact;
  }
  return result;
}
