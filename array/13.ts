/*
An array A of N real numbers is given (N is an odd number).
 Output array elements with odd order numbers in descending order of indices: AN, AN−2, AN−4, …, A1.
  Do not use conditional statements.
*/
export function array(n: number, arr = []) {
  let newarray = [],
    fn: number,
    a: number;
  fn = Math.round(n / 2);
  for (let i = 1; i <= fn; i++) {
    a = 2 * i - 1;
    newarray.push(arr[a - 1]);
  }
  return newarray.reverse();
}
