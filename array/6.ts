/* Given three integers N (> 2), A, B, create and output an array of N integers such that the first
 element is equal to A, the second one is equal to B, and each subsequent element is equal to the 
 sum of all previous ones. */

export default function array(n, a, b: number) {
  let arr = [];
  arr[0] = a;
  arr[1] = b;
  arr[2] = a + b;
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] * 2;
  }
  return arr;
}
