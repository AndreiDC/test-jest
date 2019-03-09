const { lenCirc,areCir} = require ('./7.js');

test('return length circumference knowing the radius r ',() =>{
expect(lenCirc(2)).toBe(12.56);
});
test ('return area circle knowing the radius r',() =>{
expect(areCir(2)).toBe(12.56)
})