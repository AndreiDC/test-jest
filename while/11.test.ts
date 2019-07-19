import loop from "./11";
test("while 11 first test ", () => {
  expect(loop(19)).toEqual([6, 21]);
});

test("while 11 second  test ", () => {
  expect(loop(11)).toEqual([5, 15]);
});
