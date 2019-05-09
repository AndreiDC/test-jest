import moveRobot from "./10";

test("Test ", () => {
  expect(moveRobot("E", -1)).toEqual("S");
});
test(" first Test ", () => {
  expect(moveRobot("W", 0)).toEqual("W");
});
test(" second Test ", () => {
  expect(moveRobot("N", 1)).toEqual("W");
});
test(" third Test ", () => {
  expect(moveRobot("W", -1)).toEqual("N");
});
test(" error Test ", () => {
  expect(moveRobot("E", 1)).toEqual("N");
});
