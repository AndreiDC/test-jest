/* A three-digit integer is given. Find the sum and the product of its digits.*/
export function sumProduct(n: number) {
  let handrid, tens, ones, product, sum, int: number;
  handrid = Math.floor(n / 100);
  int = n % 100;
  tens = Math.floor(int / 10);
  ones = n % 10;
  sum = handrid + tens + ones;
  product = handrid * tens * ones;
  return [sum, product];
}
