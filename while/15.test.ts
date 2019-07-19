import loop from "./15";

test("while 15 first test", () => {
  expect(loop(5)).toEqual([2, 1102.5]);
});
test("while 15 second test", () => {
  expect(loop(1.5)).toEqual([7, 1109.84]);
});
