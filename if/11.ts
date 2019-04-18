/*The values of two integer variables A and B are given.
 If the values are not equal then assign the larger value to each variable,
  otherwise assign zero value to each variable. Output the new values of the variables A and B.*/

export function newValues(a, b) {
  let small, large: number;
  if (a == b) {
    large = 0;
    small = 0;
  } else {
    if (a > b) {
      large = a;
      small = a;
    } else {
      large = b;
      small = b;
    }
  }
  return [large, small];
}
