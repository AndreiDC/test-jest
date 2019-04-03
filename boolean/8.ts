/* Given three integers A, B, C, verify the following proposition: "The number B is between A and C".*/
export function between(a, b, c: number) {
  let bet: boolean;
  bet = (b > a && b < c) || (b > c && b < a);
  return bet;
}
