/*Given three real numbers, output the value between the minimum and the maximum. */
export default function betwenValue(a, b, c: number) {
  let betwen: number;
  if ((b > a && b < c) || (b < a && b > c)) {
    betwen = b;
  }
  if ((c > b && c < a) || (c < b && c > a)) {
    betwen = c;
  }
  if ((a > c && a < b) || (a < c && a > b)) {
    betwen = a;
  }
  return betwen;
}
