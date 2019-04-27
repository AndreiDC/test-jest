/*  Given a real independent variable x, find the value of a real function f defined as:
f(x)	 = 	2·sin(x),	if x > 0,
 	 	6 − x,	if x ≤ 0.
 */
export default function findValue(x: number) {
  let f: number;

  if (x > 0) {
    f = parseFloat((2 * Math.sin(x)).toFixed(2));
  } else {
    f = 6 - x;
  }
  return f;
}
