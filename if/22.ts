/* Given coordinates of a point that does not lie on the coordinate axes,
 find the number of a coordinate quarter containing the point.*/

export default function coordinate(x, y: number) {
  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }
}
