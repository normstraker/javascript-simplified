// Arrays
// remember that the index starts counting at 0

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(a[0]); // 1
// add an element to the end of the list
a.push(11);
a.push("hi");
a.push(["hi", "bye"]); // add array to an array
console.log(a);

// nested array
const b = [
  ["hi", "bye"],
  [1, 2],
];
console.log(b);
console.log(b[1][0]); // 1
console.log(b[0][0], b[1][1]); // hi 2
console.log(b[0][0], a[9]); // hi 10

// exercise - create an array with the first 5 letters of the alphabet and print out the middle letter
const alpha = ["a", "b", "c", "d", "e"];
console.log(alpha[2]); // c

// exercise, print out 4, 8, 11
const c = [
  [1, 2, 3, 4, 5], // 4 is index 0, 3
  [6, 7, 8, 9, 10], // 8 is index 1, 2
  [11, 12, 13, 14, 15], // 11 is index 2, 0
];
console.log(c[0][3], c[1][2], c[2][0]);

// to get the length of an array
console.log(a.length); // 13
console.log(alpha.length); // 5
console.log(b.length); // 2
console.log(c.length); // 3
console.log(c[0].length); // 5
