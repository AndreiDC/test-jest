/*Given two integers A and B, verify the following proposition: 
"The inequality A ≥ 0 is fulfilled or the inequality B < −2 is fulfilled".*/
export function fulfilled(a, b: number) {
  let ful: boolean;
  ful = a >= 0 || b < -2;
  return ful;
}
