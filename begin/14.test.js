const {radius,areaCircle} = require("./14.js");

test('return radius', () =>{
 expect(radius(11.84)).toBe(1.89);
});
test('return area circle', () =>{
 expect(areaCircle(radius(11.84))).toBe(11.22);
});