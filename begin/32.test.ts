import { tC } from "./32";

test("convert grade F in grade C", () => {
  expect(tC(16.06)).toBe(-1.72);
});
