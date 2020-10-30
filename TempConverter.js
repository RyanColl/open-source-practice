/* Temp Converter */
var x = 32;
var y;
function convertCtoF(x){
    y = x * 1.8 + 32;
    return y;
}

function convertFtoC(x){
    y = (x - 32) / 1.8;
    return y;
}
convertFtoC(x);
Math.round(y);
console.log(y);
// this part is extra
convertCtoF(x);
Math.round(y);
console.log(y);

