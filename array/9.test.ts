import array from "./9";

test("output all even numbers contained in the array in descending order first test", () => {
  expect(array(6, [9, 7, 8, 4, 3, 10])).toEqual([3, [10, 4, 8]]);
});
test("output all even numbers contained in the array in descending order second test", () => {
  expect(array(2, [9, 7])).toEqual([0, []]);
});
