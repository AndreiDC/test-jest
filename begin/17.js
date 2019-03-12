/*Three points A, B, C are given on the real axis.
 Find the length of AC, the length of BC, and the sum of these lengths.*/
var lac, lbc;
function lenAC(a, c) {
  let rf;
  lac = a - c;
  rf = parseFloat(lac.toFixed(2));
  return rf;
}
function lenBC(b, c) {
  lbc = c - b;
  return parseFloat(lbc.toFixed(2));
}
function sumLen(lac, lbc) {
  let s;
  s = lac + lbc;
  return s;
}
module.exports = [{ lenAC }, { lenBC }, { sumLen }];
