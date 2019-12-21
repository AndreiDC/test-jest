/*An array of N nonzero integers is given. If the array elements represent a geometric sequence with integer common
 ratio (see Array4) then output its common ratio, otherwise output 0.*/
export default function arr25(n: number, arr: Array<number>) {
  let newVal: number, r: number, answer: number;
  newVal = 1;
  answer = 0;
  r = 1;
  r = arr[1] / arr[0];
  for (let i = 0; i <= n - 2; i++) {
    newVal = arr[i + 1] / arr[i];
    if (newVal === r) {
      answer = r;
    } else {
      answer = 0;
      break;
    }
  }
  return answer;
}
