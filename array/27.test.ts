import arr27 from "./27";
test(" test 1; if positive and negative number ", () => {
  expect(arr27(6, [-10, 5, -8, 8, -5, 5])).toEqual(0);
});
test(" test 2; if positive and negative number ", () => {
  expect(arr27(8, [7, -7, -5, 3, -7, -8, 7, 4])).toEqual(3);
});
test(" test 3; if positive and negative number ", () => {
  expect(arr27(6, [-5, 5, 2, -4, -5, -3])).toEqual(3);
});
