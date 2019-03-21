import { segLeng } from "./5";

test("Segment of length A contains the greatest possible amount of inside segments of length B", () => {
  expect(segLeng(42, 16)).toEqual(10);
});
