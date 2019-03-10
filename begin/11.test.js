const { sum, diff, pro, div } = require("./11.js");

test("displays the sum of absolute values", () => {
  expect(sum(3.50,1.70)).toBe(5.20);
}),

test("displays the difference of absolute values", () => {
  expect(diff(3.50,1.70)).toBe(1.80);
}),

test("display the product of absolute values", () => {
  expect(pro(3.50,1.70)).toBe(5.95);  
}),

test("display the div of absolute values", () => {
  expect(div(3.50,1.70)).toBe(2.06) 
})
