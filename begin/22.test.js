const ExchVal = require("./22.js");

/*test("Exchange the values of two given variables A and B", () => {
  expect(ExchVal([{8.2}, {7.03}])).toBe([{8.2}, {7.03}]);
});*/
test("Exchange the values of two given variables A and B", () => {
  const expected = [7.03, 8.2];
  expect(ExchVal(8.2, 7.03)).toEqual(expected);
});
