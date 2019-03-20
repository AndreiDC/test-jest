/*The velocity of the first car is V1 km/h,
 the velocity of the second car is V2 km/h, 
 the initial distance between the cars is S km.
  Find the distance between the cars after T hours provided that at the start time the distance is decreasing.
   This distance is equal to an absolute value of a difference between the initial distance and the total distance
    covered by the both cars.*/

export function finDifdist(v1, s, v2, t: number) {
  // find difference distance prcurse  by the both cars
  let dd: number; // difference distance
  dd = v2 * t + v1 * t - s;
  return dd;
}
