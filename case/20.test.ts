import zodiacal from "./20";
test("Shows the zodiac after day and month", () => {
  expect(zodiacal(12, 1)).toEqual("Aquarius");
});
test("Shows the Leo zodiac after day and month", () => {
  expect(zodiacal(21, 7)).toEqual("Leo");
});
