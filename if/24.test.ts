import findValue from "./24";
test(" find the value first test ", () => {
  expect(findValue(4.72)).toBe(-2);
});
test(" find the value second test ", () => {
  expect(findValue(4.09)).toBe(-1.62);
});
test(" find the value third test ", () => {
  expect(findValue(-0.41)).toBe(6.41);
});
