/* 
 Three positive integers A, B, C are given.
  A rectangle of the size A × B contains the greatest possible amount of inside squares with the
   side length C (without overlaps).
  Find the amount of squares placed on the rectangle and the area of unused part of the rectangle.
*/

export function finAmo(a, b, c: number) {
  let t, t1, t2: number;
  t = Math.floor(a / c) * Math.floor(b / c);
  t1 = t * Math.pow(c, 2);
  t2 = a * b - t1;
  return [t, t2];
}
