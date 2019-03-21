/*An integer greater than 999 is given. Using one operator of integer division and one
 operator of taking the remainder find a hundreds digit of the given integer.*/

export function retHandrDigit(n) {
  let handr, int: number;
  int = n % 1000;
  handr = Math.floor(int / 100);
  return handr;
}
