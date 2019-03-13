/*Exchange the values of two given variables A and B. Output the new values of A and B.*/

function ExchVal(a, b) {
  let c;
  c = a + b;
  a = c - a;
  b = c - b;
  return [parseFloat(a.toFixed(2)), parseFloat(b.toFixed(2))];
}
module.exports = ExchVal;
