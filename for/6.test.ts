import sweets from "./6";

test("many sweets", () => {
  expect(sweets(73.8)).toEqual([88.56, 103.32, 118.08, 132.84, 147.6]);
});
test("many sweets first test", () => {
  expect(sweets(86.7)).toEqual([104.04, 121.38, 138.72, 156.06, 173.4]);
});
