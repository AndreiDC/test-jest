export default function array(n: number) {
  let answer = [],
    ans: number;
  ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * 2;
    answer.push(ans);
  }
  return answer;
}
