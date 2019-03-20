/* 
 The velocity of the first car is V1 km/h,
  the velocity of the second car is V2 km/h, 
  the initial distance between the cars is S km.
   Find the distance between the cars after T hours provided that the distance is increasing.
    The required distance is equal to a sum of the initial distance and the total distance covered by 
    the both cars (total distance = time · total velocity).
*/
export function finTotdist(v1, s, v2, t: number) {
  // find total distance prcurse  by the both cars
  let dt: number; // total distance
  dt = v2 * t + v1 * t + s;
  return dt;
}
