import loop from "./26";

test("while 26 first test", () => {
  expect(loop(5)).toEqual([3, 8]);
});
test("while 26 second test", () => {
  expect(loop(2)).toEqual([1, 3]);
});
