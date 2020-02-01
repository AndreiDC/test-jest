/* An array of N real numbers is given. Find the order numbers of array elements that are greater than their
 right neighbor. Output these order numbers in ascending order and also output the amount of such elements.*/
export default function array30(n: number, arr: Array<number>) {
  let arrf = [],
    ansver: number;
  ansver: 0;

  for (let i = 1; i <= n - 1; i++) {
    if (arr[i - 1] > arr[i]) {
      arrf.push(i);
    }
  }
  ansver = arrf.length;
  return [ansver, arrf];
}
