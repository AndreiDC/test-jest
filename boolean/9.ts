/*Given two integers A and B, verify the following proposition: "At least one of the numbers A and B is odd".*/

export function oneNumber(a, b: number) {
  let onNum: boolean;
  onNum = a % 2 == 1 || b % 2 == 1;
  return onNum;
}
