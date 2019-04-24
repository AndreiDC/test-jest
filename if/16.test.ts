import newValues from "./16";
test("Display new value first test", () => {
  expect(newValues(-4.54, 1.14, 5.82)).toEqual([-9.08, 2.28, 11.64]);
});
test("Display new value second test", () => {
  expect(newValues(0.44, -4.65, -7.24)).toEqual([-0.44, 4.65, 7.24]);
});
