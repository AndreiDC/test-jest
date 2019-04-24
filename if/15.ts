/*Given three real numbers, output the sum of two largest values.*/
export default function sumLargeValue(a, b, c: number) {
  let maxSum: number;
  maxSum = a + b;
  if (b + c > maxSum) {
    maxSum = b + c;
  }
  if (c + a > maxSum) {
    maxSum = c + a;
  }
  return parseFloat(maxSum.toFixed(2));
}
