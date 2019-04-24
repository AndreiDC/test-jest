/*Three integers are given. One of them differs from two other equal integers. 
Output the order number of the integer that differs from the others. */

export default function orderNumber(a, b, c: number) {
  if (a == b && b != c) {
    return 3;
  }
  if (b == c && b != a) {
    return 1;
  }
  if (c == a && a != b) {
    return 2;
  }
}
