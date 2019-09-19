import array from "./6";

test("Sum of all previous number first test ", () => {
  expect(array(7, 4, 3)).toEqual([4, 3, 7, 14, 28, 56, 112]);
});
test("Sum of all previous number second test ", () => {
  expect(array(3, -2, 5)).toEqual([-2, 5, 3]);
});
