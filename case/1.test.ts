import nameDayWeek from "./1";

test(" display name day of week first test ", () => {
  expect(nameDayWeek(1)).toBe("Monday");
});
test(" display name day of week second test ", () => {
  expect(nameDayWeek(2)).toBe("Tuesday");
});
test(" display name day of week third test ", () => {
  expect(nameDayWeek(8)).toBe("the day not exist!");
});
test("return day of week ", () => {
  expect(nameDayWeek(7)).toBe("Sunday");
});
test("return day of week first test ", () => {
  expect(nameDayWeek(6)).toBe("Saturday");
});
