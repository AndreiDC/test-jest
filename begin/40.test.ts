import { solSys } from "./40";

test("return result of quadratic equation ", () => {
  const exp = [1, 4];
  expect(solSys(2, 1, 6, 1, 3, 13)).toEqual(exp);
});
