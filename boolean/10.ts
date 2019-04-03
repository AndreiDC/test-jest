/*Given two integers A and B, verify the following proposition: "Exactly one of the numbers A and B is odd".*/

export function exactlyOne(a, b: number) {
  let exOn: boolean;
  exOn = (a + b) % 2 == 1;
  return exOn;
}
