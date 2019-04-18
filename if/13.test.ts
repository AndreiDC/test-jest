import betwenValue from "./13";

test("disply betwen value of thre numbers first test ", () => {
  expect(betwenValue(1, 2, 3)).toBe(2);
});
test("disply betwen value of thre numbers second test ", () => {
  expect(betwenValue(4, 3, 2)).toBe(3);
});
