/* Given two real numbers x, y, verify the following proposition:
 "The point with coordinates (x, y) is in the fourth coordinate quarter".*/

export default function fourCoord(x, y: number) {
  let foCo: boolean;
  foCo = x > 0 && y < 0;
  return foCo;
}