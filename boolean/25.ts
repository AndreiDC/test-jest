/* Given two real numbers x, y, verify the following proposition:
 "The point with coordinates (x, y) is in the second coordinate quarter". */

export default function secCoordinate(x, y: number) {
  let secCor: boolean;
  secCor = x < 0 && y > 0;
  return secCor;
}
