import orderNumber from "./18";

test("show diferens of the thre numbers first test", () => {
  expect(orderNumber(5, 7, 7)).toEqual(1);
});
test("show diferens of the thre numbers second test", () => {
  expect(orderNumber(5, 5, 7)).toEqual(3);
});
