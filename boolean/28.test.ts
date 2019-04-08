import firstOrThird from "./28";

test("is in the first or third coordinate quarter first test", () => {
  expect(firstOrThird(-6.74, 3.33)).toBe(false);
});

test("is in the first or third coordinate quarter second test", () => {
  expect(firstOrThird(5.26, 2.9)).toBe(true);
});
