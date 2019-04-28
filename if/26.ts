/* Given a real independent variable x, find the value of a real function f defined as:

 	 	−x,	if x ≤ 0,
f(x)	 = 	x2,	if 0 < x < 2,
 	 	4,	if x ≥ 2.

 */
export default function findValue(x: number) {
  let f: number;
  if (x <= 0) {
    f = -x;
  }
  if (x > 0 && x > 2) {
    f = 2 * x;
  }
  if (x >= 2) {
    f = 4;
  }
  return f;
}
