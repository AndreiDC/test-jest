/* An array A of N real numbers is given. Output array elements with even order numbers
 (in ascending order of indices)
 and then output array elements with odd order numbers (in ascending order of indices too):
A2,    A4,    A6,    …,    A1,    A3,    A5,    … .
*/
export function array(n: number, arr = []) {
  let arrNp = [],
    arrNi = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 == 1) {
      arrNp.push(arr[i]);
    }
    if (i % 2 == 0) {
      arrNi.push(arr[i]);
    }
  }
  return [...arrNp, ...arrNi];
}
