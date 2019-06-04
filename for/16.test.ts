import loop from "./16";

test("displays the power of the number a in the range 1, n", () => {
  expect(loop(2, 3)).toEqual([2, 4, 8]);
});
test("displays the power of the number a in the range 1, n firs test", () => {
  expect(loop(2, 4)).toEqual([2, 4, 8, 16]);
});
