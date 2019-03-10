

/*
 Given the radiuses R1 and R2 of two concentric circles (R1 > R2), 
 find the areas S1 and S2 of the circles and the area S3 of the ring bounded by the circles:
S1 = π·(R1)^2, S2 = π·(R2)^2,  S3 = S1 − S2.
Use 3.14 for a value of π.
*/
var ac1, ac2;

function areaCircl_1(r) {
  ac1 = 3.14 * Math.pow(r, 2);
  return ac1;
}

function areaCircl_2(r) {
  ac2 = 3.14 * Math.pow(r, 2);
  return ac2;
}

function areaCircl_3(ac1, ac2) {
  let ac3;
  ac3 = ac1 - ac2;
  return ac3;
}
module.exports = [{areaCircl_1},{areaCircl_2},{areaCircl_3}];

