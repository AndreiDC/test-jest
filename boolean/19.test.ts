import { pairEqual } from "./19";

test("Among three given integers there is at least one pair of equal ones first tes", () => {
  expect(pairEqual(6, 2, -3)).toBe(false);
});
test("Among three given integers there is at least one pair of equal ones second test", () => {
  expect(pairEqual(0, 1, -1)).toBe(true);
});
