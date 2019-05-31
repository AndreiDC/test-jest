import sweets from "./4";

test("having price une kg sweets, display price next nine kg sweets", () => {
  expect(sweets(2)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});
