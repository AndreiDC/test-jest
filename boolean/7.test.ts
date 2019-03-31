import { isOdd } from "./7";

test(" verify is add a and b number first test ", () => {
  expect(isOdd(2, 3)).toBe(false);
});
test(" verify is add a and b number second test ", () => {
  expect(isOdd(1, 1)).toBe(true);
});
