import trianEquilateral from "./30";

test(" The triangle with sides a, b, c is equilateral first test", () => {
  expect(trianEquilateral(3, 3, 3)).toBe(true);
});

test(" The triangle with sides a, b, c is equilateral second test", () => {
  expect(trianEquilateral(6, 3, 3)).toBe(false);
});
