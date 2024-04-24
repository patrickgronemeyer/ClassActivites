// refactor the functions below into arrow syntax

//?Refactor myNumberFunction?
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
//Arrow Syntax
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

//?Refactor greet?
function greet(name) {
  return `Hello, ${name}`;
}
//Arrow Syntax
const greet = (name) => `Hello, ${name}`;

//?Refactor timeOfDayGreet?
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};
//Arrow Syntax
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

//?Refactor tripleAndHalf?
// This function needs a block body because it involves multiple steps: calculating the triple of the number and then halving it.
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
const tripleAndHalf = (num) => {
  let triple = num * 3;
  return triple / 2;
};

//?Refactor sumTwoNumbers?
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};

//Arrow Function Syntax Notes
//Arrow functions with a single expression and no side effects can directly return that expression without the return keyword, known as a concise body.
//If the function involves more logic, such as variable declarations or multiple statements, you use a block body with curly braces {} and an explicit return statement (if returning a value).


//These refactored functions now use arrow syntax, which is more succinct and often more readable, especially when the functions are relatively simple. Arrow functions are also useful for inline functions, particularly in contexts like event listeners or simple array transformations.
