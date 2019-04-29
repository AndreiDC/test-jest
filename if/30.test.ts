import desString from "./30";

test(" description string first test ", () => {
  expect(desString(8)).toBe("one-digit even number");
});
test(" description string first test ", () => {
  expect(desString(9)).toBe("one-digit odd number");
});
test(" description string second test ", () => {
  expect(desString(11)).toBe("two-digit odd number");
});
test(" description string third test ", () => {
  expect(desString(999)).toBe("three-digit odd number");
});
