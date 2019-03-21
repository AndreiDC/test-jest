/*. Solve a system of linear equations
A1·x + B1·y = C1,
A2·x + B2·y = C2
with given coefficients A1, B1, C1, A2, B2, C2 provided that the system has the only solution. 
Use the following formulas: x = (C1·B2 − C2·B1)/D, y = (A1·C2 − A2·C1)/D, where D = A1·B2 − A2·B1.
*/
export function solSys(a1, b1, c1, a2, b2, c2: number) {
  let d, x, y: number;
  d = a1 * b2 - a2 * b1;
  x = (c1 * b2 - c2 * b1) / d;
  y = (a1 * c2 - a2 * c1) / d;
  return [x, y];
}
