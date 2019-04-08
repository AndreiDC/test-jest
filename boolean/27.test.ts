import { secOrThird } from "./27";

test("The point with coordinates (x, y) is in the second or third coordinate quarter first test", () => {
  expect(secOrThird(-5.96, -9.51)).toBe(true);
});
test("The point with coordinates (x, y) is in the second or third coordinate quarter second test", () => {
  expect(secOrThird(9.05, -3.69)).toBe(false);
});
