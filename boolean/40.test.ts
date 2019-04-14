import aKnight from "./40";

test("A knight during one turn", () => {
  expect(aKnight(3, 6, 2, 4)).toBe(true);
  expect(aKnight(3, 2, 5, 2)).toBe(false);
});
