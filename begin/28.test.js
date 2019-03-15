const [{ powA2 }, { powA3 }, { powA5 }, { powA10 }, { powA15 }] = require("./28.js");

test(" return power value a to A2 ", () => {
  expect(powA2(2.08)).toBe(4.33);
});
test(" return power value a to A3 ", () => {
  expect(powA3(2.08)).toBe(9.0);
});
test(" return power value a to A5 ", () => {
  expect(powA5(2.08)).toBe(38.93);
});
test(" return power value a to A10 ", () => {
  expect(powA10(2.08)).toBe(1515.77);
});
test(" return power value a to A15 ", () => {
  expect(powA15(2.08)).toBe(59013.32);
});
