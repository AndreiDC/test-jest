/*A three-digit integer is given.
 Output an integer obtained from the given one by moving its right digit to the left side.*/

export function threeDigit(n: number) {
  let one, dig, int: number;
  one = n % 10;
  int = Math.floor(n / 10);
  dig = one * 100 + int;
  return dig;
}
