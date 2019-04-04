import { exactlyTwo } from "./15";

test("Exactly two of the numbers A, B, C are positive first test", () => {
  expect(exactlyTwo(-6, 9, 3)).toBe(true);
});
test("Exactly two of the numbers A, B, C are positive second test ", () => {
  expect(exactlyTwo(-2, 2, -2)).toBe(false);
});
