import { nameSeasonYear } from "./3";

test(" return season ", () => {
  expect(nameSeasonYear(2)).toBe("Winted");
});
test("return season first test", () => {
  expect(nameSeasonYear(5)).toBe("Spring");
});
test("return error example", () => {
  expect(nameSeasonYear(13)).toBe("error enter new value");
});
