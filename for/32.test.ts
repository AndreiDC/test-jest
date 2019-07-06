import loop from "./32";

test("for 32 first test", () => {
  expect(loop(6)).toEqual([2, 1.5, 0.83, 0.46, 0.29, 0.21]);
});
