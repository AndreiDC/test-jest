import loop from "./18";

test("while 18 first test", () => {
  expect(loop(23163)).toEqual([5, 15]);
});
test("while 18 second test", () => {
  expect(loop(70)).toEqual([2, 7]);
});
