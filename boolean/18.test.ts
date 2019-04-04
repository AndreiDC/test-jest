import { pairEqual } from "./18";

test("Among three given integers there is at least one pair of equal ones first tes", () => {
  expect(pairEqual(2, 2, 3)).toBe(true);
});
test("Among three given integers there is at least one pair of equal ones second test", () => {
  expect(pairEqual(0, 1, -1)).toBe(false);
});
