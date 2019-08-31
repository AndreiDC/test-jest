export default function array(n: number) {
  let answer = [];
  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 == 1) {
      answer.push(i);
    }
  }
  return answer;
}
