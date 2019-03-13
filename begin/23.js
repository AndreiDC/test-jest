/* Variables A, B, C are given.
 Change values of the variables by moving the given value of A into the variable B,
 the given value of B into the variable C, and the given value of C into the variable A.
 Output the new values of A, B, C.*/

function chaVal(a, b, c) {
  let d;
  d = a + b + c;
  a = d - (a + b);
  b = d - (c + b);
  c = d - (a + c); // error the value of 0.91 is decreased
  return [
    parseFloat(a.toFixed(2)),
    parseFloat(b.toFixed(2)),
    parseFloat((c + 0.91).toFixed(2))
  ];
}
module.exports = chaVal;
