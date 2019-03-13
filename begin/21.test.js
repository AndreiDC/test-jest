const [
  { sideA },
  { sideB },
  { sideC },
  { perimeter },
  { area }
] = require("./21.js");

test("return side A of triangle", () => {
  expect(sideA(4.4, 0.4, 3.6, 2.0)).toBe(1.79);
});
test("return side B of triangle", () => {
  expect(sideB(3.6, 2.0, 0.1, 3.8)).toBe(3.94);
});
test("return side C of triangle", () => {
  expect(sideC( 0.1, 3.8,4.4, 0.4)).toBe(5.48);
});
test("return perimeter triangle", () => { // is an error need to be revised
  expect(
    perimeter(
      sideA(4.4, 0.4, 3.6, 2.0),
      sideB(3.6, 2.0, 0.1, 3.8),
      sideC(0.1, 3.8,4.4, 0.4)
    )
  ).toBe(5.61);
});
test("return area triangle", () => {   //is an error need to be revised
  expect(
    area(
      sideA(4.4, 0.4, 3.6, 2.0),
      sideB(3.6, 2.0, 0.1, 3.8),
      sideC(0.1, 3.8,4.4, 0.4),
      perimeter(
        sideA(4.4, 0.4, 3.6, 2.0),
        sideB(3.6, 2.0, 0.1, 3.8),
        sideC(0.1, 3.8,4.4, 0.4)
      )
    )
  ).toBe(2.16);
});
