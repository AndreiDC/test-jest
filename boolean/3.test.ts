import { isEvent } from "./3";

test("The number is a event first test", () => {
  expect(isEvent(-80)).toBe(true);
});
test("The number is a event second test", () => {
  expect(isEvent(60)).toBe(true);
});
test("The number is a event the third test", () => {
  expect(isEvent(20)).toBe(true);
});
