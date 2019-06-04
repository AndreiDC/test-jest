/*A real number A and an integer N (> 0) are given. 
Using one loop-statement compute and output powers AK for all integer exponents K in the range 1 to N. */

export default function loop(a, n: number) {
  let result: number,
    ar = [];
  result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * a;
    ar.push(result);
  }
  return ar;
}
