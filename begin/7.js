/* 
 Given the radius R of a circle, find the length L of the circumference and
 the area S of the circle: L = 2·π·R, S = π·R^2. Use 3.14 for a value of π.
*/
function lenCirc(R){
    return (2*3.14*R);
}
function areCir(R){
    return (3.14*Math.pow(R,2));
}
module.exports = { lenCirc,areCir}
