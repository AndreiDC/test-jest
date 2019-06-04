import loop from "./18";

test("display result ", () => {
  expect(loop(-9, 3)).toEqual(820);
});
test("display result next test ", () => {
  expect(loop(5, 4)).toEqual(521);
});
