import coordinate from "./23";

test("return x4,y4 for rectangle first test", () => {
  expect(coordinate(-2, -8, 1, -8, 1, 2)).toEqual([-2, 2]);
});
test("return x4,y4 for rectangle second test", () => {
  expect(coordinate(6, 8, 10, 8, 6, 10)).toEqual([10, 10]);
});
