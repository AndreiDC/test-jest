import { fulMeter } from "./1";

test("return distance", () => {
  expect(fulMeter(8856)).toEqual(88);
});
test("return distance in meters", () => {
  expect(fulMeter(3264)).toEqual(32);
});
