/*
An array of N real numbers and two integers K and L (1 ≤ K ≤ L ≤ N) are given.
Find the sum of array elements with the order numbers in the range K to L inclusively.
*/
export function array(arr = [], k, l: number) {
  let sum: number,
    a = [];
  sum = 0;
  for (let i = k - 1; i <= l - 1; i++) {
    sum = parseFloat((sum + arr[i]).toFixed(2));
  }
  return sum;
}
