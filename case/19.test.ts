import asianCalendar from "./19";
test("display color and animal the this year", () => {
  expect(asianCalendar(1921)).toEqual("The Black Hen's year");
});
