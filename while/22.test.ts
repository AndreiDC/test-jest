import isPrim from "./22";

test("while 22 first test", () => {
  expect(isPrim(7)).toBe(true);
});

test("while 22 second test", () => {
  expect(isPrim(137)).toBe(true);
});

test("while 22 third test", () => {
  expect(isPrim(166)).toBe(false);
});
test("while 22 fortin test", () => {
  expect(isPrim(9)).toBe(false);
});
