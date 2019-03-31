/*Given two integers A and B, verify the following proposition: "Each of the numbers A and B is odd".*/

export function isOdd(a, b: number) {
  let od: boolean;
  od = a % 2 == 1 && b % 2 == 1;
  return od;
}
