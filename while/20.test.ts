import loop from "./20";
test("while 20 first test  ", () => {
  expect(loop(123)).toEqual(true);
});
test("while 20 second test  ", () => {
  expect(loop(333)).toEqual(false);
});
test("while 20 third test  ", () => {
  expect(loop(222)).toEqual(true);
});
