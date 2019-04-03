/*Given three integers A, B, C, verify the following proposition: "At least one of the numbers A, B, C is positive".*/

export function oneNumber(a, b, c: number) {
  let oN: boolean;
  oN = a > 0 || b > 0 || c > 0;
  return oN;
}
