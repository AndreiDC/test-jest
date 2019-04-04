/*Verify the following proposition: "Among three given integers there is at least one pair of equal ones".  */
export function pairEqual(a, b, c: number) {
  let equ: boolean;
  equ = a == b || b == c || c == a;
  return equ;
}
