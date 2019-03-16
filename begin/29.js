/*
The angle value α in degrees (0 ≤ α < 360) is given. Convert this value into radians.
Take into account that 180° = π radians. Use 3.14 for a value of π.
*/
function degToRadi(a) {
  let d;
  d = (a * Math.PI) / 180;
  return parseFloat(d.toFixed(2));
}
module.exports = degToRadi;
