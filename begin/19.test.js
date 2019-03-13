const [
  { detX3 },
  { detY3 },
  { detSidesA },
  { detSidesB },
  { areaRectangle },
  { perimeterRectangle }
] = require("./19.js");

test("return X3 point of rectangle", () => {
  expect(detX3(2.6, 3, 5.9, 0.4)).toBe(5.9);
});
test("return Y3 point of rectangle", () => {
  expect(detY3(2.6, 3, 5.9, 0.4)).toBe(3);
});
test("return sides A of rectangle", () => {
  expect(detSidesA(5.9, 3, 2.6, 3)).toBe(detSidesA(5.9, 3, 2.6, 3));
});
test("return sides B of rectangle", () => {
  expect(detSidesB(5.9, 3, 5.9, 0.4)).toBe(detSidesB(5.9, 3, 5.9, 0.4));
});
test("return area of rectangle", () => {
  expect(
    areaRectangle(detSidesA(5.9, 3, 2.6, 3), detSidesB(5.9, 3, 5.9, 0.4))
  ).toBe(8.58);
});
test("return area of rectangle", () => {
  expect(
    perimeterRectangle(detSidesA(5.9, 3, 2.6, 3), detSidesB(5.9, 3, 5.9, 0.4))
  ).toBe(11.8);
});
