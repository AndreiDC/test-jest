/* An array of N real numbers and two integers K and L (1 < K ≤ L ≤ N) are given. 
Find the average of all array elements except ones with the order numbers in the range K to L inclusively. */
export default function array(arr = [], n: number, k: number, l: number) {
  let sum1,
    sum2,
    med,
    k1,
    kk2: number,
    numere = [];
  med = 1;
  sum1 = 0;
  sum2 = 0;
  k1 = 0;
  kk2 = 0;
  for (let i = 0; i < k - 1; i++) {
    sum1 = sum1 + arr[i];

    k1 = k1 + 1;
  }
  for (let i = l; i < n; i++) {
    sum2 = sum2 + arr[i];
    kk2 = kk2 + 1;
  }
  med = parseFloat(((sum1 + sum2) / (k1 + kk2)).toFixed(2));
  return med;
}
