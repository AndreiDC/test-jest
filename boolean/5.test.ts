import { fulfilled } from "./5";

test("verify first test", () => {
  expect(fulfilled(-3, -2)).toBe(false);
});
test("verify second  test", () => {
  expect(fulfilled(2, -1)).toBe(true);
});
