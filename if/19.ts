/*Four integers are given. One of them differs from three other equal integers. 
Output the order number of the integer that differs from the others.*/
export default function differsValue(a, b, c, d: number) {
  if (a == b && b == c && c != d) {
    return 4;
  }
  if (b == c && c == d && d != a) {
    return 1;
  }
  if (c == d && d == a && a != b) {
    return 2;
  }
  if (d == a && a == b && b != c) {
    return 3;
  }
}
