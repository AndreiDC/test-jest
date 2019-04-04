import { nemAsc } from "./21";

test("All digits of the number are in ascending order first test", () => {
  expect(nemAsc(356)).toBe(true);
});
test("All digits of the number are in ascending order second test", () => {
  expect(nemAsc(654)).toBe(false);
});
test("All digits of the number are in ascending order three test", () => {
  expect(nemAsc(300)).toBe(false);
});
test("All digits of the number are in ascending order four test", () => {
  expect(nemAsc(400)).toBe(false);
});
