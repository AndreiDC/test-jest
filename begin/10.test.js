const { sum, diff, pro, div } = require("./10.js");

test("displays the sum of squares", () => {
  expect(sum(4.6, 3.8)).toBe(35.6);
}),

test("displays the difference of squares", () => {
  expect(diff(4.6, 3.8)).toBe(6.72);
}),

test("display the product of squares", () => {
  expect(pro(4.6,3.8)).toBe(305.55);  
}),

test("display the div of division", () => {
  expect(div(4.6,3.8)).toBe(1.47) 
})
