/*Given three integers A, B, C, verify the following proposition:
 "The double inequality A < B < C is fulfilled".*/
export function douInequality(a, b, c: number) {
  let dou: boolean;
  dou = a < b && b < c;
  return dou;
}
