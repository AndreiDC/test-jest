/* Given an integer N (> 0), compute N2 by means of the formula

N2 = 1 + 3 + 5 + … + (2·N − 1). */

export default function square(n: number) {
  let sq = [],
    a: number;
  a = 0;
  for (let i = 1; i <= n; i++) {
    a = a + 2 * i - 1;
    sq.push(a);
  }
  return sq;
}
