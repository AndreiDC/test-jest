/*Given two real numbers x, y, verify the following proposition:
 "The point with coordinates (x, y) is in the second or third coordinate quarter".*/

export function secOrThird(x, y) {
  let sot: boolean;
  sot = (x < 0 && y > 0) || (x < 0 && y < 0);
  return sot;
}
