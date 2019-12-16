import arr24 from "./24";
test("array 24 first test", () => {
  expect(arr24(9, [5, 7, 9, 11, 13, 15, 17, 19, 21])).toEqual(2);
});
test("array 24 second test", () => {
  expect(arr24(5, [5, 6, 7, 8, 14])).toEqual(0);
});
test("array 24 third test", () => {
  expect(arr24(5, [2, 4, 0, -1, -2])).toEqual(0);
});
