import { sumProduct } from "./11";

test("return sum and product of the n number", () => {
  expect(sumProduct(983)).toEqual([20, 216]);
});
test("return sum and product of the n number 1", () => {
  expect(sumProduct(673)).toEqual([16, 126]);
});
