import { equalParity } from "./11";

test("The numbers A and B have equal parity 1", () => {
  expect(equalParity(2, 2)).toBe(true);
});
test("The numbers A and B have equal parity 2", () => {
  expect(equalParity(1, 1)).toBe(true);
});
test("The numbers A and B have equal parity 3", () => {
  expect(equalParity(3, 2)).toBe(false);
});
test("The numbers A and B have equal parity 4", () => {
  expect(equalParity(0, 1)).toBe(false);
});
