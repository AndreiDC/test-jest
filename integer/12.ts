/* A three-digit integer is given. Output an integer obtained
 from the given one by reading it from right to left.*/

export function overtNumber(n: number) {
  //overturning the number
  let handrid, tens, ones, int, over: number;
  handrid = Math.floor(n / 100);
  int = n % 100;
  tens = Math.floor(int / 10);
  ones = n % 10;
  over = ones * 100 + tens * 10 + handrid;
  return over;
}
