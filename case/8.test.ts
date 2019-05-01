import previousData from "./8";

test("test", () => {
  expect(previousData(1, 12)).toEqual([30, 11]);
});
test("test feb", () => {
  expect(previousData(1, 2)).toEqual([31, 1]);
});
test("first test   ", () => {
  expect(previousData(22, 12)).toEqual([21, 12]);
});
test("second test", () => {
  expect(previousData(14, 1)).toEqual([13, 1]);
});
