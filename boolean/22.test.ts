import { ascOrdes } from "./22";

test("All digits of the number are in ascending or descending order first test", () => {
  expect(ascOrdes(168)).toBe(true);
});
test("All digits of the number are in ascending or descending order second test", () => {
  expect(ascOrdes(179)).toBe(true);
});
test("All digits of the number are in ascending or descending order three test", () => {
  expect(ascOrdes(638)).toBe(false);
});
