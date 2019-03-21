/* A three-digit integer is given. 
Output an integer obtained from the given one by exchange a ones digit and a tens digit
 (for example, 123 will be changed to 132).*/

export function threeDigit(n: number) {
  let one, ten, handred, int, rf: number;
  one = n % 10;
  int = Math.floor(n / 10);
  ten = int % 10;
  handred = Math.floor(n / 100);
  rf = handred * 100 + one * 10 + ten;
  return rf;
}
