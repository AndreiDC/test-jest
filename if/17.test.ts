import newValue from "./17";
test("dispaly new value first test ", () => {
  expect(newValue(5.46, -4.52, -8.62)).toEqual([10.92, -9.04, -17.24]);
});
test("dispaly new value second test ", () => {
  expect(newValue(3.04, -3.33, -9.36)).toEqual([6.08, -6.66, -18.72]);
});
