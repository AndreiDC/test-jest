import loop from "./19";
test("while 19 first test", () => {
  expect(loop(28992)).toEqual(29982);
});
test("while 19 second test", () => {
  expect(loop(123456)).toEqual(654321);
});
