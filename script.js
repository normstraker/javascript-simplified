// Everytime you work inside a {} you have scope. So every function has it's own scope.
// Everything in your code is Global Scope.
// Everything in your function is Local Scope.

// function sayHi(name) {
//   let result = "Hi " + name;
//   console.log(result);
// }
// let result = "Norm";
// sayHi(result);

// let name = "Norm";
// sayHi(name);

// Example of layered scope, inner most has access to outer scope but outer does not have access to inner scope
{
  let c = 3;
  {
    let a = 1;
    {
      let b = 2;
      console.log(a);
      console.log(b);
      console.log(c);
    }
  }
}
