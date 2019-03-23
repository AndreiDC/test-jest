import { lastHour } from "./22";

test("return last haurs first test", () => {
  expect(lastHour(11330)).toBe(530);
});
test("return last haurs first test", () => {
  expect(lastHour(449)).toBe(449);
});
