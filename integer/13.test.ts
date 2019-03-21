import { threeDigit } from "./13";

test("A three-digit integer is given", () => {
  expect(threeDigit(378)).toBe(783);
});
