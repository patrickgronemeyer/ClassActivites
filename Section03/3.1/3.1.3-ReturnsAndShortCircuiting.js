// what does the function below return?

// function myNumberFunction() {
//   let num = 2 ** 2;
//   num = num + 3;
//   num = num % 4;
//   num = num * 14;
//   console.log(num);
// }
// it returns undefined

// change the function above to return a value

function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}
myNumberFunction();

//or

const result = myNumberFunction();
console.log(result); // This will print 42

//This modification makes the function more versatile as it now returns its result, allowing the calling code to decide what to do with that value, such as storing, further processing, or printing it.

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}

// ? will the following function short circuit?

let height = 50;
function checkCircusRides() {
  if (height < 48) {
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}

console.log(checkCircusRides());
// change the function above to use short circuiting

let param4 = "a";

param4 = 4;
