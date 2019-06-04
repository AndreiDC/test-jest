/* A real number A and an integer N (>0) are given. Using one loop-statement 
 compute the expression 1-a+a^2-a^3,+...,(-1)^n*a^n .
 Do not use conditional statments*/

export default function(a, n: number) {
  let result, po, sign: number;
  result = 1;
  po = -1;
  sign = -1;
  for (let i = 1; i <= n; i++) {
    po = po * a;
    sign = -sign;
    result = result + po * sign;
  }
  return result;
}
