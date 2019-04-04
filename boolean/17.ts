/*Given a positive integer, verify the following proposition: "The integer is a three-digit even number".*/

export function threeDigit(a: number) {
  let three: boolean;
  three = a % 2 == 1 && 99 < a && a < 999;
  return three;
}
