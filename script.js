// Type Coercion (converting one type to another)

// number
// string

let a = "1";
let b = "2.3";

console.log(a);
console.log(typeof a);

// convert to number
console.log(parseInt(a));
console.log(typeof parseInt(a));

console.log(parseInt(b)); // removes the decimal
console.log(parseFloat(b)); // keeps the decimal
console.log(typeof parseFloat(b));

// convert back to string
console.log(a.toString());
console.log(typeof a.toString());
console.log(b.toString());
console.log(typeof b.toString());

//=================

// implicit type coercion (the computer is implicitly taking care of the conversion for you)
let c = 4;
let d = "Hello ";

// when you have a number with a string, the ADDED number is always converted to a string
console.log(d + c); // Hello 4
console.log(d - c); // NaN

let e = 1;
let f = "3";
console.log(e + f); // 13
console.log(typeof (e + f)); // string
console.log(e + parseInt(f)); // 4
console.log(typeof (e + parseInt(f))); // number

// always try to make your types the same when working in JS
