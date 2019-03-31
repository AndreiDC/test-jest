import { fulfilled } from "./4";

test("fallowing proposition  A > 2 and B ≤ 3 ", () => {
  expect(fulfilled(3, 4)).toBe(false);
});
test("fallowing proposition  A > 2 and B ≤ 3 ", () => {
  expect(fulfilled(3, 2)).toBe(true);
});
