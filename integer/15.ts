/* A three-digit integer is given.
 Output an integer obtained from the given one by exchange a tens digit and a hundreds digit
  (for example, 123 will be changed to 213).*/

export function threeDigit(n: number) {
  let one, ten, handred, int, fin: number;
  one = n % 10;
  int = Math.floor(n / 10);
  ten = int % 10;
  handred = Math.floor(n / 100);
  fin = ten * 100 + handred * 10 + one;
  return fin;
}
