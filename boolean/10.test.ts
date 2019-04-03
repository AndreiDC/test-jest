import { exactlyOne } from "./10";

test("verify if numbers if odd first test", () => {
  expect(exactlyOne(1, 3)).toBe(false);
});

test("Exactly one of the numbers A and B is odd", () => {
  expect(exactlyOne(1, 4)).toBe(true);
});
