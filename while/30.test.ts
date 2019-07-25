import loop from "./30";

test("while 30 first test", () => {
  expect(loop(33.01, 13.81, 7.35)).toBe(4);
});
test("while 30 second test", () => {
  expect(loop(54.29, 54.32, 3.44)).toBe(225);
});
