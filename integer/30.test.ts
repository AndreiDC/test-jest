import { namberIncentury } from "./30";

test(" return number of the century firs test", () => {
  expect(namberIncentury(2200)).toBe(22);
});
test(" return number of the century firs test", () => {
  expect(namberIncentury(2231)).toBe(23);
});
