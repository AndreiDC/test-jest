import { tuesday } from "./25";

test("year January 1 was Tuesday first test ", () => {
  expect(tuesday(39)).toEqual(0);
});
test("year January 1 was Tuesday second test ", () => {
  expect(tuesday(47)).toEqual(1);
});
