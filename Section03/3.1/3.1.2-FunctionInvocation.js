const { Console } = require("console");

// print the function below
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}

//console.log*("this is what myNumberFunction() returns " +  myNumberFunction());

// now, invoke the myNumberFunction function

myNumberFunction(); // This will output 42 to the console

// print just the function of console.log (no invocation)

console.log; // This is a reference to the function, not an invocation

console.log(console.log);
