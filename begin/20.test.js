const disTwopoint = require("./20.js");

test(" return distance betwen two points", () => {
  expect(disTwopoint(7.8, 8.9, -3.6, 9.2)).toBe(11.4);
});
