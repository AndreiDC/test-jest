import { radTodeg } from "./31";

test(" convert radius in angle ", () => {
  expect(radTodeg(1.25)).toBe(71.62);
});
