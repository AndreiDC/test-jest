const dis = require("./16.js");

test("return distance between two points", () => {
  expect(dis(10, 1.6)).toBe(8.4);
});
