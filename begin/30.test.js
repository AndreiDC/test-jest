const radTodeg = require("./30.js");

test(" convert radius in angle ", () => {
  expect(radTodeg(1.25)).toBe(71.62);
});
