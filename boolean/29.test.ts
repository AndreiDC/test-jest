import isInside from "./29";

test("The point (x, y) is inside of the rectangle first test", () => {
  expect(isInside(-2, 10, -10, -7, 1, -18)).toBe(false);
});

test("The point (x, y) is inside of the rectangle second test", () => {
  expect(isInside(9, -2, 8, -1, 14, -6)).toBe(true);
});
