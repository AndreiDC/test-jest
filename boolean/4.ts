/* Given two integers A and B, verify the following proposition:
 "The inequalities A > 2 and B ≤ 3 both are fulfilled".*/

export function fulfilled(a, b: number) {
  let ful: boolean;
  ful = a > 2 && b <= 3;
  return ful;
}
