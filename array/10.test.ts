import array from "./10";
test("return all even numers ascending and all add number descending first test", () => {
  expect(array(6, [2, 4, 2, 3, 10, 5])).toEqual([2, 4, 2, 10, 5, 3]);
});
test("return all even numers ascending and all add number descending second test", () => {
  expect(array(7, [6, 3, 5, 4, 5, 8, 8])).toEqual([6, 4, 8, 8, 5, 5, 3]);
});
