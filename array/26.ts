/*An array of N integers is given. If odd and even numbers are alternated in the array then output 0, 
otherwise output the order number of the first element that breaks the above condition.*/
export function arr26(n: number, arr: number[]) {
  let rf = 0;
  for (let i = 1; i <= n - 1; i++) {
    if (Math.abs(arr[i] % 2) == Math.abs(arr[i - 1] % 2)) {
      rf = i + 1;
      i = n;
    }
  }

  return rf;
}
