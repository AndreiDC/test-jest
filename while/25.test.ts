import loop from "./25";
test("while 25 first test", () => {
  expect(loop(8)).toBe(13);
});
test("while 25 second test", () => {
  expect(loop(89)).toBe(144);
});
