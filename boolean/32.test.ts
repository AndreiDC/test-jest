import isRightTriangle from "./32";

test("verify if triangle is right first tes ", () => {
  expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test("verify if triangle is right second test ", () => {
  expect(isRightTriangle(24, 19, 7)).toBe(false);
});
