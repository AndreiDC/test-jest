/* Given the area S of a circle, find the diameter D and the length L of the circumference.
 Take into account that L = π·D,    S = π·D^2/4. Use 3.14 for a value of π. */

var d;

function cirDiam(s) {
  d = Math.sqrt((s * 4) / 3.14);
  return parseFloat(d.toFixed(2));
}

function lenCirc(d) {
  let l = 3.14 * d;
  return parseFloat(l.toFixed(2));
}

module.exports = [{ cirDiam }, { lenCirc }];
