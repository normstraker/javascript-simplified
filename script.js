// Array Methods
// a Method is a function inside an Array or Object

const a = [1, 2, 3, 4, 5];

// a.forEach((number, index) => {
//   console.log(number + " " + index);
// }); // 1, 2, 3, 4, 5

// we can modify the elements in our array using map
// const newA = a.map(number => {
//   return number * 2;
// });
// a is not changed

// filter can remove elements in our array
const newA = a.filter(number => {
  return number <= 2;
});
console.log(a);
console.log(newA);

// find loops through our array and returns the first element in our array that equals true
const n = a.find(number => {
  return number > 2;
});

console.log(n); // 3

// some checks if any element in array equal true
const isTrue = a.some(number => {
  return number > 5;
});
console.log(isTrue); // false

// every checks if all elements in array equal true
const areAll = a.every(number => {
  return number > 0;
});
console.log(areAll);

// reduce - reduces your array to one single value by doing something to it
const s = a.reduce((sum, number) => {
  return sum + number;
}, 0);
console.log(s); // 15 (0+1+2+3+4+5) 0 is the default value of sum

// ==================
// Exercise

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];
const total = items.reduce((sum, price) => {
  return (sum + price);
}, 0);
console.log(total);
