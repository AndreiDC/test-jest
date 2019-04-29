import numberDayMonth from "./4";

test(" return number day in the month  ", () => {
  expect(numberDayMonth(2)).toBe(28);
});
test("return number day in the month first test", () => {
  expect(numberDayMonth(1)).toBe(31);
});
test("return number day in the month second test", () => {
  expect(numberDayMonth(4)).toBe(30);
});
test("return number day in the month error test", () => {
  expect(numberDayMonth(13)).toBe("error enter new value");
});
