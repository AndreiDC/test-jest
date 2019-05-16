import { order } from "./17";

test(" display number task in alphabet equivalent ", () => {
  expect(order(21)).toEqual("the twenty-first task");
});
test("display number task in alphabetic equivalent first test", () => {
  expect(order(20)).toEqual("the twenty task");
});
test("display number task in alphabetic equivalent second test ", () => {
  expect(order(11)).toEqual("the eleven task");
});
test("display number task in alphabetic equivalent third test ", () => {
  expect(order(12)).toEqual("the twelve task");
});
