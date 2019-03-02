const { area,perimeter} = require ('./3');

test ( ' return area result ', () => {
 expect (area(2,3)).toBe(6);
 //expect (perimeter(2,3)).toBe(10);
});
test ('return perimeter result',() =>{
expect (perimeter(2,3)).toBe(10);
}); 