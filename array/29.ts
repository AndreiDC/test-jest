/* Given an array A of N real numbers, find the maximum among elements with odd order numbers: A1, A3, A5, … . */
export default function arr29(n: number, arr: Array<number>) {
  let arrf = [],
    max: number;
  for (let i = 0; i <= n - 1; i++) {
    if (i % 2 == 0) {
      arrf.push(arr[i]);
    }
    max = arrf[0];
    for (let val of arrf) {
      if (max < val) {
        max = val;
      }
    }
  }
  return max;
}
