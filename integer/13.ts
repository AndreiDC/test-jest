/* A three-digit integer is given. Output an integer
 obtained from the given one by moving its left digit to the right side.*/
export function threeDigit(n: number) {
  let td, handred, int: number;
  handred = Math.floor(n / 100);
  int = n % 100;
  td = int * 10 + handred;
  return td;
}
