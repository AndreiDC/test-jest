/* Given an integer independent variable x, find the value of an integer function f defined as:
	if x < −2 or x > 2, f(x) = 	2·x,
          −3·x	otherwise.*/

export default function findValue(x: number) {
  let f: number;
  if (x < -2 || x > 2) {
    f = 2 * x;
  } else {
    f = -3 * x;
  }
  return parseFloat(f.toFixed(2));
}
