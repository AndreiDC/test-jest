/* Given two real numbers, output the larger value and then the smaller value of them.*/

export function largeSmaller(a, b: number) {
  let small, large: number;
  if (a > b) {
    large = a;
    small = b;
  } else {
    large = b;
    small = a;
  }

  return [large, small];
}
