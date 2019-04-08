/*Given two real numbers x, y, verify the following proposition: "The point with coordinates (x, y) 
is in the first or third coordinate quarter".*/

export default function firstOrThird(x, y) {
  let firThr: boolean;
  firThr = (x < 0 && y < 0) || (x > 0 && y > 0);
  return firThr;
}
