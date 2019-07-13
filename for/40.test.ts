import loop from "./40";

test("for 40 first test", () => {
  expect(loop(20, 24)).toEqual([
    20,
    21,
    21,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24
  ]);
});
test("for 40 second test", () => {
  expect(loop(12, 13)).toEqual([12, 13, 13]);
});
