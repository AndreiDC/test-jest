import nextData from "./9";

test("output values D and M for the next date", () => {
  expect(nextData(29, 11)).toEqual([30, 11]);
});
test("output values D and M for the next date first test", () => {
  expect(nextData(31, 12)).toEqual([1, 1]);
});
test("output values D and M for the next date second test", () => {
  expect(nextData(30, 4)).toEqual([1, 5]);
});
