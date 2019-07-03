import loop from "./28";

test(" show answer after expresion ", () => {
  expect(loop(-0.65095206, 7)).toEqual(0.59174889);
});
test(" show answer after expresion first example ", () => {
  expect(loop(0.34018586, 2)).toEqual(1.15562713);
});
test(" show answer after expresion second example ", () => {
  expect(loop(0.87018388, 9)).toEqual(1.36886815);
});
