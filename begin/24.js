/* Variables A, B, C are given.
 Change values of the variables by moving the given value of A into the variable C, 
 the given value of C into the variable B, and the given value of B into the variable A.
  Output the new values of A, B, C.*/
function changeVal(a, b, c) {
  let d;
  d = a;
  a = b;
  b = c;
  c = d;
  return [a, b, c];
}
module.exports = { changeVal };
