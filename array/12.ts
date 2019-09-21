/* An array A of N real numbers is given (N is an even number). 
Output array elements with even order numbers in ascending order of indices:
A2, A4, A6, …, AN. Do not use conditional statements.*/
export function array(n: number, arr = []) {
  let newarray = [],
    a: number,
    ak: number;
  a = 2;
  ak = Math.floor(n / 2);
  for (let i = 0; i <= n; i++) {
    newarray.push(arr[a - 1]);
    a = a + 2;
  }
  return newarray.slice(0, ak);
}
