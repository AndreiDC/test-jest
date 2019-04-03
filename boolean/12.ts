/* given three integers a,b,c, verify the following proposition: "Each of the numbers a,c,b is positive" */

export function eachposit(a, b, c: number) {
  let epos: boolean;
  epos = a > 0 && b > 0 && c > 0;
  return epos;
}
