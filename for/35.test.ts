import loop from "./35";

test("for 35 first test", () => {
  expect(loop(10)).toEqual([1, 2, 3, 3, 2, -1, -5, -10, -13, -13]);
});
