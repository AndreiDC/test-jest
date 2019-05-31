/*Given two integers A and B (A < B),
 output in descending order all integers in the range A to B (excluding A and B).
Also output the amount N of these integers.*/

export function amountN(a, b: number) {
  let k: number,
    vec = [];
  k = 0;
  for (let i = b - 1; i > a; i--) {
    vec.push(i);
    k = k + 1;
  }
  return [vec, k];
}
