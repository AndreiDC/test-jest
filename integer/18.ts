/* An integer greater than 999 is given. Using one operator of integer division and one 
operator of taking the remainder find a thousands digit of the given integer.*/

export function findThousands(n: number) {
  let thousands, int: number;
  int = Math.floor(n / 1000);
  thousands = int % 10;
  return thousands;
}
