// An array of N nonzero integers is given.
//  If positive and negative numbers are alternated in the array then output 0,
//  otherwise output the order number of the first element that breaks the above condition.
export default function arr27(n: number, arr: number[]) {
  let ansver: number;
  ansver = 0;
  for (let i = 1; i <= n - 1; i++) {
    if ((arr[i - 1] > 0 && arr[i] > 0) || (arr[i - 1] < 0 && arr[i] < 0)) {
      ansver = i + 1;
      break;
    }
  }

  return ansver;
}
