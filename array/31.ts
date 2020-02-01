/* An array of N real numbers is given. Find the order numbers of array elements that are greater than 
their left neighbor. Output these order numbers in descending order and also output
 the amount of such elements. */

export default function array31(n: number, arr: Array<number>) {
  let arrOrdNum: Array<number> = [];
  for (let i = 1; i <= n - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      arrOrdNum.push(i + 1);
    }
  }
  arrOrdNum = arrOrdNum.reverse();
  return [arrOrdNum, arrOrdNum.length];
}
