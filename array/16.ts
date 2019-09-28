/*An array A of N real numbers is given. Output array elements as follows:
A1,    AN,    A2,    AN−1,    A3,    AN−2,    … .*/
export default function array(n: number, arr = []) {
  let newArr = [],
    newn,
    j,
    nn: number;
  newn = Math.floor(n / 2) + 1;
  j = 0;
  nn = n - 1;
  for (let i = 0; i < newn; i++) {
    newArr.push(arr[j]);
    newArr.push(arr[nn]);
    j = j + 1;
    nn = nn - 1;
  }
  return newArr.splice(0, n);
}
