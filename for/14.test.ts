import square from "./14";

test("Display n^2  by means the formula", () => {
  expect(square(3)).toEqual([1, 4, 9]);
});
test("Display n^2  by means the formula first test", () => {
  expect(square(4)).toEqual([1, 4, 9, 16]);
});
