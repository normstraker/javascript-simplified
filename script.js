// Objects - a collection of information (properties) related in some way

let name = "Norm";
const age = 57;
const favoriteNum = 127;

// To create an object you use {}
let person = {
  name: "Norm",
  age: 57,
  favoriteNum: 127,
  // you can add a function
  sayHi() {
    console.log("Hi");
  },
  property: "Value",
};
// let person = { name, age, favoriteNum, sayHi };
console.log(person);
console.log(person.sayHi);
person.sayHi();

// Exercise
// Create an object with the properties:
// 1. Make
// 2. Model
// 3. isUsed
// function that logs "Vrooom!"

let car = {
  Make: "Ford",
  Model: "F150",
  isUsed: true,
  makeNoise() {
    console.log("Vrooom!");
  },
};
console.log(car.Make, car.Model, car.isUsed);
car.makeNoise();

// Exercise
const book = {
  title: "How the West was Won",
  Author: { name: "Pete Shmeet", age: 63 },
  wives: ["Loretta", "Jamie"],
};
console.log(book.title, book.Author.name, book.Author.age);

// you can redefine object properties and array values
book.title = "Napolean";
book.Author.age = 73;
book.wives[1] = "Myrtle";
console.log(book.title, book.Author.name, book.Author.age, book.wives[1]);
