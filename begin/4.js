/*
Given the diameter d of a circle, find the length L of
 the circle: L = π·d. Use 3.14 for a value of π.
*/
function lenCircle (d) {
    var a = (Math.PI * d).toFixed(2);
    return parseFloat(a)
}
module.exports = {lenCircle}