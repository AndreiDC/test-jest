import playCard from "./15";

test("number and suit of palying card", () => {
  expect(playCard(10, 3)).toEqual("ten of diamonds");
});
test("number and suit of palying card first test", () => {
  expect(playCard(9, 4)).toEqual("nine of hearts");
});
