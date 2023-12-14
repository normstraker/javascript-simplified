// Reference VS Value
// Variables are assigned values
// Arrays and Objects are assigned references in a computer memory location

// let a = 10;
// let b = "Hi";
// let c = [1,2]; // eg. 0x01
// let d = c; // eg. 0x01
// d.push(3)

// let a = 10;
// let b = "Hi";
// let c = [1, 2]; // eg. 0x01
// let d = [3, 4, 5]; // eg. 0x02 (new memory)
// d.push(6);

let a = 10;
let b = "Hi";
let c = { name: "Norm" }; // eg. 0x01
let d = c; // eg. 0x01
d.name = "Joe";

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + JSON.stringify(c)); // prints out an object
console.log("d = " + JSON.stringify(d));

// ========

let aa = [1, 2]; // 0x01
let bb = [1, 2]; // 0x02
console.log(aa === bb); // false

aa.push(3);
console.log(aa);
console.log(bb);

// =========
const aaa = [1, 2]; // 0x01
const bbb = [1, 2]; // 0x02
aaa.push(3); // pushes to the memory, doesn't change location (const)
// aaa = [1, 2, 3] // throws an error, redefined, not modified
console.log(aaa);
console.log(bbb);

// ==========

const z = [1, 2]; // 0x01
const elementToAdd = 3; // 3

add(z, elementToAdd); // 0x01, 3

console.log(z); // Array(3) [1, 2, 4]
console.log(elementToAdd); // 3

function add(array, element) {
  element = element + 1; // 4
  array.push(element); // [1, 2, 4]
}
