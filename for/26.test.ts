import loop from "./26";

test("display resultat", () => {
  expect(loop(0.73799034, 2)).toEqual(0.64779395);
});
test("display result next test", () => {
  expect(loop(0.3493243, 2)).toEqual(0.33615559);
});
