import arr25 from "./25";
test("first test arr 25", () => {
  expect(arr25(8, [5, 15, 45, 135, 405, 1215, 3645, 10935])).toEqual(3);
});
test("second test arr 25", () => {
  expect(arr25(7, [5, -10, 20, -40, 80, -160, 320])).toEqual(-2);
});
test("arr 25 this test is wrong", () => {
  expect(arr25(8, [6, -6, 6, -6, 6, -6, 8, -6])).toEqual(0);
});
