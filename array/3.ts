export default function array(n, a, d: number) {
  let answer = [],
    ans: number;
  ans = 0;
  answer[0] = a;
  for (let i = 1; i < n; i++) {
    ans = parseFloat((a + d * i).toFixed(2));
    answer.push(ans);
  }
  return answer;
}
