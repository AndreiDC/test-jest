import loop from "./10";

test("while 10 first test", () => {
  expect(loop(86)).toBe(4);
});
test("while 10 second test", () => {
  expect(loop(81)).toBe(3);
});
