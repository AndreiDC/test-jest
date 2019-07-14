import loop from "./3";
test("while 3 first test", () => {
  expect(loop(92, 45)).toEqual([2, 2]);
});

test("while 3 second test", () => {
  expect(loop(56, 33)).toEqual([1, 23]);
});
