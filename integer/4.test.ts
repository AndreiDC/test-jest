import { segLen } from "./4";

test(" A contains the greatest possible amount of inside segments of length B ", () => {
  expect(segLen(26, 2)).toEqual(13);
});
