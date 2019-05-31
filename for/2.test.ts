import amountN from "./2";
test(" display the number of reps of n in the 2,6 interval ", () => {
  expect(amountN(2, 6)).toBe(5);
});
test(" display the number of reps of n in the 5,10 interval  ", () => {
  expect(amountN(5, 10)).toBe(6);
});
