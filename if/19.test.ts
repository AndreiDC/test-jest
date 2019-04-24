import differsValue from "./19";

test("display first test ", () => {
  expect(differsValue(1, 1, 1, 2)).toBe(4);
});
test("display second test ", () => {
  expect(differsValue(1, 2, 2, 2)).toBe(1);
});
