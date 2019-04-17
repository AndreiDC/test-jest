/*Given two real numbers, output the order number of the smaller of them.*/

export default function theSmaller(a, b: number) {
  let small: number;
  if (a < b) {
    small = a;
  } else {
    small = b;
  }
  return small;
}
