/*The angle value α in radians (0 ≤ α < 2·π) is given. Convert this value into degrees.
Take into account that 180° = π radians. 
Use 3.14 for a value of π.*/

export function radTodeg(a: number): number {
  let r: number;
  r = (a * 180) / Math.PI;
  return parseFloat(r.toFixed(2));
}
