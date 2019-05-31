/*Given two integers A and B (A < B),
output in ascending order all integers in the range A to B (including A and B).
Also output the amount N of these integers.*/

export default function amountN(a, b: number) {
  let k: number;
  k = 0;
  for (let i = a; i <= b; i++) {
    k = k + 1;
  }
  return k;
}
