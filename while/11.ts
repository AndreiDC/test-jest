export default function loop(n: number) {
  let sum, k: number;
  sum = 0;
  k = 0;
  while (sum < n) {
    k = k + 1;
    sum = sum + k;
  }
  return [k, sum];
}
