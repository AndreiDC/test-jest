/* An array of N distinct integers is given. If the array elements represent an arithmetic sequence ( see Array3 )
then autput its common difference, otherwise output 0.*/
export default function arr24(n: number, arr: Array<number>) {
  let arS: number,
    newarr: Array<number> = new Array(n),
    ansver: number;
  ansver = 0;
  arS = 0;
  arS = arr[1] - arr[0];
  newarr[0] = arr[0];
  for (let i = 0; i < n - 1; i++) {
    newarr[i + 1] = arr[i] + arS;
  }
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] == newarr[i]) {
      ansver = arS;
    } else {
      ansver = 0;
    }
  }

  return ansver;
}
