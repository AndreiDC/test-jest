/*
 An array of N real numbers and two integers K and L (1 ≤ K ≤ L ≤ N) are given.
  Find the average of array elements with the order numbers in the range K to L inclusively.
*/
export function array(arr = [], k, l: number) {
  let sum, n, med: number;
  sum = 0;
  med = 1;
  n = l - k;
  for (let i = k - 1; i <= l - 1; i++) {
    // sum = sum + arr[i];
    arr.push(arr[i]);
  }
  med = parseFloat((sum / n).toFixed(2));
  return arr;
}
