import aBishop from "./38";

test("Dishop first test", () => {
  expect(aBishop(5, 8, 4, 8)).toBe(false);
});

test("Dishop second test", () => {
  expect(aBishop(3, 2, 2, 3)).toBe(true);
});

test("Dishop third test", () => {
  expect(aBishop(2, 1, 6, 5)).toBe(true);
});
