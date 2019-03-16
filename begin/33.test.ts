import { cost1kg, costYkg } from "./33";

test("return cost y produs", () => {
  expect(cost1kg(2, 176.6, 1.3)).toEqual(114.79);
});

test("return cost 1 produs", () => {
  expect(costYkg(2, 176.6)).toEqual(88.3);
});
