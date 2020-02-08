/*  Given an array of N real numbers, find the order number of its first local minimum
 (an array element is called the local minimum if it is smaller than its neighbors). */
export default function array32(n: number, arr: Array<number>) {
  let posElem: Number;
  if (arr[0] < arr[1]) {
    return 1;
  }
  for (let i = 2; i <= n - 1; i++) {
    if (arr[i - 2] > arr[i - 1] && arr[i - 1] < arr[i]) {
      posElem = i;
      break;
    }
  }
  return posElem;
}
