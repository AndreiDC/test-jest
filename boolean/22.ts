/* Given a three-digit integer, verify the following proposition: "All digits of the number are in ascending or descending order". */

export function ascOrdes(n: number) {
  let ascdes, a, b, c: number;
  a = Math.floor(n / 100);
  b = Math.floor(n / 10) % 10;
  c = n % 10;
  ascdes = (b > a && b < c) || (b > c && b < a);
  return ascdes;
}
