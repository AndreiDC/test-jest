import { solQuadequ } from "./39";
test("return result of quadratic equation ", () => {
  const exp = [3, 4];
  expect(solQuadequ(3, -21, 36)).toEqual(exp);
});
