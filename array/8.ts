/* Given an array of N integers, output all even numbers contained in the array in descending order 
of their indices. Also output the amount K of even numbers contained in the array.*/
export default function array(n: number, arr = []) {
  let newarr = [],
    k: number;
  k = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 1) {
      newarr.push(arr[i]);
      k = k + 1;
    }
  }
  return [k, newarr];
}
