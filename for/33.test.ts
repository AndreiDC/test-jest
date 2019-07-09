import loop from "./33";

test("for 32 first test", () => {
  expect(loop(3)).toEqual([2, 1.5, 0.83]);
});
test("for 32 second test", () => {
  expect(loop(4)).toEqual([2, 1.5, 0.83, 0.46]);
});
