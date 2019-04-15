/*Given two real numbers, output the larger value of them. */

export default function largeValue(a, b: number) {
  let max: number;
  if (a == 0 && b == 0) {
    return "enter number bigger like the 0";
  }
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  return max;
}
