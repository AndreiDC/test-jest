import { quadrEcua } from "./24";

test("The quadratic equation A·x2 + B·x + C = 0 has real roots", () => {
  expect(quadrEcua(7.79, 7.4, -3.39)).toBe(true);
});
