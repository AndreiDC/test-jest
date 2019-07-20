import loop from "./21";

test("while 21 first test", () => {
  expect(loop(123)).toBe(true);
});

test("while 21 second test", () => {
  expect(loop(222)).toBe(false);
});
