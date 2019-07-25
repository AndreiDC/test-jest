/* Three positive real numbers A, B, C are given. A rectangle of size A*B contains
the greates possible amount of squares with side C (without overlaps). Find the amount
of square placed on the rectangle. Do not use the operators of multiplication and division. */

export default function loop(a, b, c: number) {
  let p, k: number;
  k = 0;
  while (a >= c) {
    p = b;

    while (p >= c) {
      k = k + 1;
      p = p - c;
    }
    a = a - c;
  }
  return k;
}
