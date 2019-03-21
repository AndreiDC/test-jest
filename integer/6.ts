/*A two-digit integer is given. Output its left digit (a tens digit) and then its right digit (a ones digit). 
Use the operator of integer division for obtaining the tens digit and the operator of 
taking remainder for obtaining the ones digit.*/

export function tenOne(n: number) {
  let ten, one: number;
  ten = Math.floor(n / 10);
  one = n % 10;
  return [ten, one];
}
