/*Given two integers A and B, verify the following proposition: "The numbers A and B have equal parity".*/

export function equalParity(a, b: number) {
  let eqPar: boolean;
  eqPar = (a % 2 == 1 && b % 2 == 1) !== (a % 2 == 0 && b % 2 == 0);
  return eqPar;
}
