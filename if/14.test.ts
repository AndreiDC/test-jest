import { miniMaxi } from "./14";

test("Display maxim and minim of three numbers first test ", () => {
  expect(miniMaxi(-2, 8, 5)).toEqual([-2, 8]);
});
test("Display maxim and minim of three numbers second test ", () => {
  expect(miniMaxi(5, 4, -2)).toEqual([-2, 5]);
});
