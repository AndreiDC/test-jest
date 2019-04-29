import leapYear from "./28";

test(" verifly if year is leap first test ", () => {
  expect(leapYear(2000)).toBe(366);
});
test(" verifly if year is leap second test ", () => {
  expect(leapYear(2500)).toBe(365);
});
test(" verifly if year is leap third test ", () => {
  expect(leapYear(1400)).toBe(365);
});
