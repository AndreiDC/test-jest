import F from "./18";

test(" disply value in alphabetic equivalent ", () => {
  expect(F(100)).toEqual("one hundred");
});
test(" disply value in alphabetic equivalent first terst", () => {
  expect(F(151)).toEqual("one hundred and fifty-one");
});
