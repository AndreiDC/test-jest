import loop from "./24";

test("while 24 first test", () => {
  expect(loop(8)).toBe(true);
});

test("while 24 second test", () => {
  expect(loop(73)).toBe(false);
});
