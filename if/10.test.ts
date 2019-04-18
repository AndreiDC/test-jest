import newValues from "./10";

test("new values of the variables A and B first test", () => {
  expect(newValues(48, 40)).toEqual([88, 88]);
});
test("new values of the variables A and B second test", () => {
  expect(newValues(2, 2)).toEqual([0, 0]);
});
