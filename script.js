// == VS ===

const a = 1;
const b = "1";
const c = 0;
const d = false;
const f = null;
const g = undefined;
// using == (JavaScript still converts types)
console.log(a == b); // true
console.log(c == d); // true
// using === (JavaScript does not convert 2 different types)
console.log(a === b); // false
console.log(c === d); // false
// use parseInt with === to convert, don't let JS do it using just ==
console.log(a === parseInt(b)); // true

console.log(f == g); // true (they are the same in JS eyes - they both mean 'nothing')
console.log(f === g); // false (since they are technically different)

// these rules apply to using != and !== (not equal) as well