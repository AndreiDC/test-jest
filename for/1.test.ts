import repnum from "./1";

test(" shows how many times do you repeat k ", () => {
  expect(repnum(2, 4)).toEqual([2, 2, 2, 2]);
});
test(" shows how many times do you repeat k ", () => {
  expect(repnum(2, 5)).toEqual([2, 2, 2, 2, 2]);
});
