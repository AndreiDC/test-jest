/*Given an array of N integers, output all even numbers contained in the array in ascending order 
of their indices and then output all odd numbers contained in the array in descending order of their indices  */
export default function array(n: number, arr = []) {
  let newarr = [];
  let newarr1 = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      newarr.push(arr[i]);
    } else {
      newarr1.push(arr[i]);
    }
  }
  newarr1 = newarr1.reverse();
  let primes = [...newarr, ...newarr1];
  return primes;
}
