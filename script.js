// New and This

// create a function that lets us create a user object

// function createUser(name, age){
//   return {
//     name: name,
//     age: age
//   }
// }

// const user = createUser('Norm', 25);
// console.log(user);

// ======================
// New

// works just like an object
// when you are creating an object with the new keyword, it's called a constructor function
const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMilliseconds());

// when you create a function with a constructor, you generally capitalize the first letter

// constructor function, because it constucts a new object of the specified type

function User(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  this.human = true;
  // return this
}
const user = new User("Norm", 25);
console.log(user);
