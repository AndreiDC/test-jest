import loop from "./17";

test("while 17 first test", () => {
  expect(loop(1234)).toEqual([4, 3, 2, 1]);
});
test("while 17 second test", () => {
  expect(loop(80)).toEqual([0, 8]);
});
