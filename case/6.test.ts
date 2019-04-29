import unitsLen from "./6";

test("transform units in metres", () => {
  expect(unitsLen(2, 3.23)).toBe(3230.0);
});
test("transform units in metres first test", () => {
  expect(unitsLen(4, 7.74)).toBe(0.00774);
});
test("transform units in metres second test", () => {
  expect(unitsLen(5, 2.37)).toBe(0.0237);
});
