const {parVol,parAre} = require('./6.js');
test ('return correct parVal',() => {
    expect(parVol(4,7.10,6.30)).toBe(178.920);
});
test('return correct parAre',() => {
    expect(parAre(4,7.10,6.30)).toBe(196.660);
});