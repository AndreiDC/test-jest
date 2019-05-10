import alphabetic from "./16";

test("transform integer year in alphabetic equivalent", () => {
  expect(alphabetic(29)).toEqual("twenty-nine years");
});
test("transform integer year in alphabetic equivalent", () => {
  expect(alphabetic(31)).toEqual("thirty-one years");
});
