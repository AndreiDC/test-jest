import triangle from "./13";

test("disply Elements of a right isosceles triangle ", () => {
  expect(triangle(4, 18.07)).toEqual([6.01, 8.5, 4.25]);
});
test("display Element of a right isoscels triangle first test", () => {
  expect(triangle(1, 7.33)).toEqual([10.37, 5.18, 26.86]);
});
