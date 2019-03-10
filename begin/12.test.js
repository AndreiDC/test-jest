const { hipot, perime } = require("./12.js");
let a=0;

test(" dispaly hipotenuse a right triangle ", () => {
  expect(hipot(4.10, 6.50)).toBe(7.69);
});

test("dispaly perimeter P of the trianle right", () => {
  expect(perime(4.10,6.50,hipot(4.1,6.5))).toBe(18.29);
});

