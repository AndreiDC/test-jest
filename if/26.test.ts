import findValue from "./26";

test(" find value first test", () => {
  expect(findValue(-0.21)).toEqual(0.21);
});
test("find value second test", () => {
  expect(findValue(-0.39)).toEqual(0.39);
});
