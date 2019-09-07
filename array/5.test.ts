import array from "./5";

test("his Fibonacci string first test", () => {
  expect(array(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
});
test("his Fibonacci string second test", () => {
  expect(array(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
