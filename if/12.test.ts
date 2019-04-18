import minimalValue from "./12";

test(" Display minimal value of three value first test ", () => {
  expect(minimalValue(3, 4, 5)).toBe(3);
});
test(" Display minimal value of three value second test ", () => {
  expect(minimalValue(3, 2, 5)).toBe(2);
});
