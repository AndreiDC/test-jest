import findValue from "./27";

test(" find value first test ", () => {
  expect(findValue(13.87)).toBe(-1);
});
test(" find value second  test ", () => {
  expect(findValue(-11.52)).toBe(0);
});
test(" find value third test ", () => {
  expect(findValue(0.15)).toBe(1);
});
test(" find value Fourth test ", () => {
  expect(findValue(-6.44)).toBe(0);
});
