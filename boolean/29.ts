/*Given real numbers x, y, x1, y1, x2, y2, verify the following proposition:
 "The point (x, y) is inside of the rectangle whose left top vertex is (x1, y1), right bottom vertex is (x2, y2),
  && sides are parallel to coordinate axes".*/

export default function isInside(x, y, x1, y1, x2, y2: number) {
  let isI: boolean;
  isI = x1 < x && x < x2 && y1 > y && y > y2;
  return isI;
}
