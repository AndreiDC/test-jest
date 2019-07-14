import loop from "./4";

test("while 4 first test", () => {
  expect(loop(243)).toBe(true);
});

test("while 4 second test", () => {
  expect(loop(1568)).toBe(false);
});

test("while 4 third test", () => {
  expect(loop(1)).toBe(true);
});
