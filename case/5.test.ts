import aritOper from "./5";

test("aritmetic operations", () => {
  expect(aritOper(2, 3, 1)).toBe(5);
});
test("aritmetic operations first test", () => {
  expect(aritOper(10, 3, 2)).toBe(7);
});
test("aritmetic operations error test", () => {
  expect(aritOper(10, 3, 5)).toBe("error enter new value");
});
test("aritmetic operations second test", () => {
  expect(aritOper(5, 5, 3)).toBe(25);
});
