import array from "./2";

test("array 2 first test", () => {
  expect(array(5)).toEqual([2, 4, 8, 16, 32]);
});
test("array 2 second test", () => {
  expect(array(6)).toEqual([2, 4, 8, 16, 32, 64]);
});
