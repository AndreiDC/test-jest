/*The values of two real variables A and B are given.
 Redistribute the values so that A and B have the smaller and the larger value respectively. 
 Output the new values of the variables A and B. */

export default function newValues(a, b: number) {
  let small, large, newV: number;
  if (a < b) {
    small = a;
    large = b;
  } else {
    newV = a;
    a = b;
    b = newV;
    small = a;
    large = b;
  }
  return [small, large];
}
