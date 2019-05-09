import circleValue from "./12";

test("disply Elements of a circle ", () => {
  expect(circleValue(2, 8.3)).toEqual([4.15, 26.08, 54.11]);
});
test("disply Elements of a circle first test ", () => {
  expect(circleValue(1, 6.98)).toEqual([13.96, 43.86, 153.06]);
});
