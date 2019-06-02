import sum from "./10";

test("Dispaly sum fit to the following formula 1/2+1/3...", () => {
  expect(sum(3)).toBe(0.83);
});
