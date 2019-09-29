export default function array(arr = []) {
  let val = [],
    n: number;
  n = arr.length - 1;
  //   val = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= arr[n]) {
      val.push(arr[i]);
    }
  }
  return val.shift();
}
