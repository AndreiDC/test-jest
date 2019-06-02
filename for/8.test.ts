import productRange from "./8";

test("Return product al integer number in the range a,b", () => {
  expect(productRange(2, 5)).toEqual(120);
});
test("Return product al integer number in the range a,b first test", () => {
  expect(productRange(1, 3)).toEqual(6);
});
