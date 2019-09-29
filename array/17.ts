/*  An array A of N real numbers is given. Output array elements as follows:
A1,    A2,    AN,    AN−1,    A3,    A4,    AN−2,    AN−3,    … .*/
export default function array(n: number, arr = []) {
  let fn,
    j,
    nf: number,
    newarr = [];
  j = -1;
  nf = n;
  fn = Math.floor(n / 4) + 1;
  console.log(fn);
  for (let i = 1; i <= fn; i++) {
    j = j + 1;
    newarr.push(arr[j]);
    j = j + 1;
    newarr.push(arr[j]);
    nf = nf - 1;
    newarr.push(arr[nf]);
    nf = nf - 1;
    newarr.push(arr[nf]);
  }

  return newarr.slice(0, n);
}
