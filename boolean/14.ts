/*Given three integers A, B, C, verify the following proposition: "Exactly one of the numbers A, B, C is positive".*/

export function exactlyOne(a, b, c: number) {
  let ex: boolean;
  ex = (a > 0 !== b > 0) !== c > 0;
  return ex;
}
