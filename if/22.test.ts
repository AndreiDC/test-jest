import coordinate from "./22";

test("first test", () => {
  expect(coordinate(-3.47, -6.05)).toEqual(3);
});
test("2 test", () => {
  expect(coordinate(8.15, -7.57)).toEqual(4);
});
test("2 test", () => {
  expect(coordinate(4.11, 8.74)).toEqual(1);
});
