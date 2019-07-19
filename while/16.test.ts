import loop from "./16";

test("while 16 first test", () => {
  expect(loop(39)).toEqual([7, 231.422]);
});
test("while 16 second test", () => {
  expect(loop(2)).toEqual([17, 200.121]);
});
