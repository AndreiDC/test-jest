import { amountN } from "./3";
test("should return correct results", () => {
  expect(amountN(-9, -5)).toEqual([[-6, -7, -8], 3]);
});
