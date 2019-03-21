/* A three-digit integer is given. Output its last digit (a ones digit) and then its middle digit (a tens digit).*/
export function finOneTen(n: number) {
  let int, one, ten: number;
  one = n % 10;
  int = n % 100;
  ten = Math.floor(int / 10);
  return [ten, one];
}
