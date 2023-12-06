// Hoisting - arrow functions will not be hoisted (moved to top of code)

// let sum = (a, b) => {
//   return a + b;
// };

console.log(sum(4, 5));

// Hoisting - regular functions will be hoisted (moved to top of code)

function sum(a, b) {
  return a + b;
}
