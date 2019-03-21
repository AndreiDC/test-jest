import { threeDigit } from "./16";

test("for example, 123 will be changed to 132", () => {
  expect(threeDigit(123)).toBe(132);
});
test("for example, 456 will be changed to 465", () => {
  expect(threeDigit(456)).toBe(465);
});
