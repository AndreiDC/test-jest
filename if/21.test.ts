import coordinateAxes from "./21";

test("first test ", () => {
  expect(coordinateAxes(3, 0)).toEqual(1);
});
test("second test ", () => {
  expect(coordinateAxes(4, 0)).toEqual(1);
});
test("third test ", () => {
  expect(coordinateAxes(0, 0)).toEqual(0);
});
test("4 test ", () => {
  expect(coordinateAxes(-3, 0)).toEqual(1);
});
test("5 test ", () => {
  expect(coordinateAxes(-5, 4)).toEqual(3);
});
test("5 test ", () => {
  expect(coordinateAxes(-5, -4)).toEqual(3);
});
