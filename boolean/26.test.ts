import fourCoord from "./26";

test(" is x,y in fourth coordinate quarter ", () => {
  expect(fourCoord(-9.79, 7.92)).toBe(false);
});
test(" is x,y in fourth coordinate quarter ", () => {
  expect(fourCoord(4, -6.11)).toBe(true);
});
