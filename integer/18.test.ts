import { findThousands } from "./18";

test(" return Thousands digit in the n number", () => {
  expect(findThousands(14334)).toBe(4);
});
test(" return Thousands digit in the n number next example", () => {
  expect(findThousands(1589)).toBe(1);
});
