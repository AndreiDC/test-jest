import secCoordinate from "./25";

test("The point with coordinates (x, y) is in the second coordinate quarter first test", () => {
  expect(secCoordinate(1.5, -4.14)).toBe(false);
});

test("The point with coordinates (x, y) is in the second coordinate quarter second test", () => {
  expect(secCoordinate(-8.23, 0.16)).toBe(true);
});
