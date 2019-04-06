/*Three real numbers A, B, C are given (A is not equal to 0). By means of a discriminant D = B2 − 4·A·C,
 verify the following proposition: 
"The quadratic equation A·x2 + B·x + C = 0 has real roots".*/
export function quadrEcua(a, b, c: number) {
  let d: number, quaEc: boolean;
  d = Math.pow(b, 2) - 4 * a * c;
  quaEc = d >= 0;
  return quaEc;
}
