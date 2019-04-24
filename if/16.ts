/*The values of three real variables A, B, C are given.
 If the values are in ascending order then double them, otherwise replace the value of each variable
  by its opposite value. Output the new values of the variables A, B, C.*/
export default function newValues(a, b, c: number) {
  if (a < b && b < c) {
    a = 2 * a;
    b = 2 * b;
    c = 2 * c;
    return [a, b, c];
  } else {
    a = -a;
    b = -b;
    c = -c;
    return [a, b, c];
  }
}
