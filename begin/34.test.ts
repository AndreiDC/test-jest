import { costKgChoc, costKgsug, diferens } from "./34";

test(" return cost an kg cholat ", () => {
  expect(costKgChoc(1.5, 126.72)).toEqual(84.48);
});
test(" return cost an kg sugar ", () => {
  expect(costKgsug(3.4, 87.04)).toEqual(25.6);
});
test(" return cost an kg sugar ", () => {
  expect(diferens(3.4, 87.04)).toEqual(3.3);
});
