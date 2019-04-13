/* Given three integers a, b, c, verify the following proposition:
 "A triangle with the sides a, b, c exists".   */

export default function existTr(a, b, c: number) {
  let ex: boolean;
  ex = a + b > c && b + c > a && a + c > c;
  return ex;
}
