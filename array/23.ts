/*An array of N real numbers and two integers K and L (1 < K ≤ L ≤ N) are given.
 Find the average of all array elements except ones with the order numbers in the range K to L inclusively.*/

export default function arr23(
  arr: Array<number>,
  n: number,
  k: number,
  l: number
) {
  let med1: number,
    med2: number,
    average: number,
    nn: number,
    contor: number,
    sum: number;
  med1 = 0;
  med2 = 0;
  contor = 0;
  average = 1;
  sum = 0;
  for (let i = 0; i < k - 1; i++) {
    contor = contor + 1;
    sum = sum + arr[i];
    med1 = sum / contor;
  }
  contor = 0;
  sum = 0;
  for (let i = l; i <= n - 1; i++) {
    contor = contor + 1;
    sum = sum + arr[i];
    med2 = sum / contor;
  }
  average = parseFloat(((med1 + med2) / 2).toFixed(2));
  return average;
}
