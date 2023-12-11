//Nan
const a = parseInt("sdfsdf");
const b = 1;

console.log(a);
// anything equal to Nan is always Nan
console.log(a === NaN);
// you need to use a special method to determine if something is not-not a number (isNaN)
console.log(isNaN(b));
