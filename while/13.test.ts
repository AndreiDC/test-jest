import loop from "./13";

test("while 13 first test", () => {
  expect(loop(8.0148)).toEqual([1699, 8.01531]);
});
test("while 13 second test", () => {
  expect(loop(6.58751)).toEqual([408, 6.58971]);
});
test("while 13 third test", () => {
  expect(loop(8.63914)).toEqual([3171, 8.63918]);
});
