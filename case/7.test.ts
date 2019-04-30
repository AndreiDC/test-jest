import units from "./7";

test("unites in mass", () => {
  expect(units(3, 0.52)).toBe(0.00052);
});
test("unites in mass first test", () => {
  expect(units(2, 1.57)).toBe(0.00000157);
});
