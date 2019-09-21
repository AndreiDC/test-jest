/*An array A of N real numbers and an integer K (1 ≤ K ≤ N) are given. Output array 
elements with order numbers that are multiples of K: AK, A2·K, A3·K, … . Do not use conditional statements.*/
export function array(n: number, arr = [], k: number) {
  let newarr = [],
    a: number;
  a = k;
  let ak: number;
  ak = Math.floor(n / k);
  for (let i = 0; i < n; i++) {
    newarr.push(arr[a - 1]);
    a = a + 2;
  }
  return newarr.slice(0, ak);
}
