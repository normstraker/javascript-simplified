// function sumCallback(a, b, callback) {
//   callback(a + b);
// }

// function handleSum(sum) {
//   console.log(sum);
// }

// sumCallback(2, 3, handleSum);

// create a new function that takes two parameters;
// 1. name
// 2. callback that prints out what we pass to it (printVariable)

function w(x, callback) {
  callback("Hello " + x);
}

// function aa(z) {
//   console.log("Hello " + z);
// }
// function bb(v) {
//   console.log("What's up " + v + "?");
// }
// w("Norm", aa);
// w("Norman", bb);

// or

w("Norm", function (z) {
  console.log(z);
});

// passing a function to a function is just making the function a fancy variable
// when you pass a function as a variable don't use the ()
