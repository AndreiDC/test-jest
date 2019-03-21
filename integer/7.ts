/* A two-digit integer is given. Find the sum and the product of its digits.*/
export function sumProduct(n: number) {
  let one, ten, sum, product: number;
  one = n % 10;
  ten = Math.floor(n / 10);
  sum = one + ten;
  product = one * ten;
  return [sum, product];
}
