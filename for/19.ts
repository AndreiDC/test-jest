/* Given an integer N (> 0), find the value of a following product:
N! = 1·2·…·N */

export default function loop(n: number) {
  let result: number;
  result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
