// regular function
// function sum(a, b, c) {
//   return a + b - c;
// }
// console.log(sum(5, 6, 1));

// let dum = (a, b, c) => {
//   return a - b + c;
// };
// console.log(dum(1, 10, 19));

// let aName = x => {
//   return x;
// };
// console.log(aName("Norman Lewis Straker"));

// if setup in settings, () are removed around single parameter with arrow function (ie x)
let aName = x => {
  console.log(x);
};
aName("Norm");

// with arrow function if code on one line you can leave off the {} and 'return' and js will return a + b value
let aSum = (a, b) => a + b;
console.log(aSum(6, 9));

// same as

// let aSum = (a, b) => {
//   return a + b;
// };
// console.log(aSum(6, 9));

let printHi = name => "Hi " + name;
console.log(printHi("Norm"));

// all variables and function names must be unique
// function Hi() {
//   console.log("hi");
// }
// Hi();

// how to write an arrow function with empty parameter
let hiYa = () => {
  console.log("hi");
};
hiYa();

// why arrow functions?
function func(x, callback) {
  callback(x);
}
// func(10, function (variable) {
//   console.log(variable);
// });
// to this
func(10, variable => console.log(variable))