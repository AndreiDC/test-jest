/*
The sides a and b of a rectangle are given. Find the area S = a·b,
 the perimeter P = 2·(a + b) of the rectangle.
*/

function area (a, b) {
    return a*b;
}
function perimeter ( a,b ) {
    return 2*(a+b);
}

module.exports = { area , perimeter}