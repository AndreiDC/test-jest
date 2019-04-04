import { polin } from "./23";

test("The number is read equally both from left to right and from right to left first test", () => {
  expect(polin(2945)).toBe(false);
});
test("The number is read equally both from left to right and from right to left second test", () => {
  expect(polin(3333)).toBe(true);
});
