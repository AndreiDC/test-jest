/* Three integers are given. Find the amount of positive integers in the input data */
export default function kPositive(a, b, c: number) {
  let k: number;
  k = 0;
  if (a > 0) {
    k = k + 1;
  }
  if (b > 0) {
    k = k + 1;
  }
  if (c > 0) {
    k = k + 1;
  }
  return k;
}
