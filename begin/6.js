/*
The edges a, b, c of a right parallelepiped are given. 
Find the volume V = a·b·c and the surface area S = 2·(a·b + b·c + a·c)
 of the right parallelepiped
*/
function parVol (a,b,c){
    return a*b*c;
 };
 function parAre(a,b,c){
     return 2*(a*b+b*c+a*c);
 }
 module.exports={parVol,parAre};