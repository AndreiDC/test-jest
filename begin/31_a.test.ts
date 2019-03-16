import { radTodeg } from "./31_a";

test(" convert radius in angle ", () => {
  expect(radTodeg(1.25)).toBe(71.62);
});
