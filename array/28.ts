// Given an array A of N real numbers, find the minimum among elements with even order numbers: A2, A4, A6, … .
export default function arr28(n: number, arr: Array<number>) {
  let arr1 = [];

  for (let i = 0; i <= n - 1; i++) {
    if (i % 2 == 1) {
      arr1.push(arr[i]);
    }
  }
  let min = 0;
  for (let i = 0; i <= arr1.length; i++) {
    if (min > arr1[i]) {
      min = arr1[i];
    }
  }
  return min;
}
