import loop from "./14";

test("while 14 first test", () => {
  expect(loop(1.94454)).toEqual([3, 1.83333]);
});

test("while 14 second test", () => {
  expect(loop(5.33429)).toEqual([115, 5.32649]);
});

test("while 14 third test", () => {
  expect(loop(3.13995)).toEqual([12, 3.10321]);
});
