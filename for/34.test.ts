import loop from "./34";

test("for 34 first test ", () => {
  expect(loop(4)).toEqual([1, 2, 1.667, 1.778]);
});
test("for 34 second test ", () => {
  expect(loop(3)).toEqual([1, 2, 1.667]);
});
