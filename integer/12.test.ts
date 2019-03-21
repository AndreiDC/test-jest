import { overtNumber } from "./12";

test("by reading it from right to left", () => {
  expect(overtNumber(983)).toEqual(389);
});
test("by reading it from right to left 1", () => {
  expect(overtNumber(673)).toEqual(376);
});
