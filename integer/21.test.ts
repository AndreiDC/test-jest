import { lasMinute } from "./21";

test("Find last minute", () => {
  expect(lasMinute(23987)).toBe(47);
});
test("Find last minute last example", () => {
  expect(lasMinute(17961)).toBe(21);
});
