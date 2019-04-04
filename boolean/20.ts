/*Given a three-digit integer, verify the following proposition: "All digits of the number are different".*/

export function digitNum(a: number) {
  let dif: boolean, b, c, d: number;
  b = Math.floor(a / 100);
  c = Math.floor(a / 10) % 10;
  d = a % 10;
  dif = b !== c && c !== d && d !== b;
  return dif;
}
