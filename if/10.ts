/* The values of two integer variables A and B are given.
 If the values are not equal then assign the sum of given values to each variable,
  otherwise assign zero value to each variable. 
Output the new values of the variables A and B. */

export default function newValues(a, b) {
  let small, large: number;
  if (a == b) {
    small = 0;
    large = 0;
  } else {
    small = a + b;
    large = a + b;
  }
  return [small, large];
}
