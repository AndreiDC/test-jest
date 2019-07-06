import loop from "./30";

test("", () => {
  expect(loop(1.57, 3.14, 3)).toEqual([[0, 0.13344, 0.49885, 0.9984], 0.52333]);
});
