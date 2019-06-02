/*Given a real number A and an integer N (> 0), find A raised to the power N (i. e., the product of N values of A):
AN = A·A· … ·A.*/

export default function fiRaPo(a, n: number) {
  let frp: number;
  frp = 1;
  for (let i = 1; i <= n; i++) {
    frp = frp * a;
  }
  return frp;
}
