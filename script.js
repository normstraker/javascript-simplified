// let a = 1;

// function print() {
//   console.log(a);
// }

// a = 2;
// print();

function print(variable) {
  let c = 3;
  return function func(variable2) {
    console.log(variable); //1
    console.log(variable2); //2
    console.log(c); //3
  };
}
let a = print(1);
a(2); //print(1) func(2)

// https://chat.openai.com/g/g-igUACg05d-web-design-guru/c/1a10e6cb-1076-45e5-becd-d2e1e6b7b59e