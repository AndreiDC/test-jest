import loop from "./33a";

test("for 33 first test  ", () => {
  expect(loop(5)).toEqual([1, 1, 2, 3, 5]);
});
test("for 33 second test  ", () => {
  expect(loop(12)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
});
