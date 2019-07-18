import loop from "./5";
test("while 5 first test", () => {
  expect(loop(128)).toBe(7);
});
test("while 5 second test", () => {
  expect(loop(2048)).toBe(11);
});
