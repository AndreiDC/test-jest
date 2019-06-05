import loop from "./21";

test(" first test", () => {
  expect(loop(3)).toEqual(2.66666667);
});
test(" second test", () => {
  expect(loop(1)).toEqual(2.0);
});
