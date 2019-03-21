import { fulTon } from "./2";

test("return M kilogram in M ton ", () => {
  expect(fulTon(6772)).toBe(6);
});
test("return M kilogram in M ton one test ", () => {
  expect(fulTon(8849)).toBe(8);
});
