/*Given a real independent variable x, find the value of an integer function f defined as:
 	 	0,	if x < 0,
f(x)	 = 	1,	if x belongs to [0, 1), [2, 3), …,
          −1,	if x belongs to [1, 2), [3, 4), … .*/
export default function findValue(x: number) {
  let f, x1, x2: number;
  x2 = Math.floor(x) + 1;
  x1 = Math.floor(x);
  if (x1 % 2 == 0) {
    if (x1 < x && x < x2) {
      f = 1;
    }
  } else {
    if (x1 < x && x < x2) {
      f = -1;
    }
  }
  if (x < 0) {
    f = 0;
  }
  return f;
}
