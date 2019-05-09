import newDirection from "./11";

test("a new direction with two parameters", () => {
  expect(newDirection("S", -1, 2)).toEqual("E");
});
test("a new direction with two parameters first test", () => {
  expect(newDirection("S", 1, 2)).toEqual("W");
});
test("a new direction with two parameters second test", () => {
  expect(newDirection("N", 2, -1)).toEqual("W");
});
