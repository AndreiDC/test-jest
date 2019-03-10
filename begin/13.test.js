const [{ areaCircl_1}, {areaCircl_2},{areaCircl_3 }] = require("./13.js");

test(" return area circle S1 ", () => {
  expect(areaCircl_1(4)).toBe(50.24);
});
test("return area circle S2", () => {
  expect(areaCircl_2(3)).toBe(28.26);
});
test("return area circle S3", () => {
  expect(areaCircl_3(areaCircl_1(4), areaCircl_2(3))).toBe(21.98);
});
