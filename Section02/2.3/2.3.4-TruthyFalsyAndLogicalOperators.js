// Logical Operators
// what do you expect each line to print?
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(!(true && false));
console.log(false || !false);

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null);
console.log(!``);
console.log(!(1 && "false"));
console.log(NaN || !"true");

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age;

age = 10;

// I added an additional statement to handle the intentional omission we made in this one.
// If you pay attention, the requirement is to code for OVER 10 and for UNDER 10... no
// condition or statement at all is mentioned in the requirement for the age being
//  exactly 10, which is our value as listed above for age already.
if (age > 10) {
  console.log("full menu");
} else if (age < 10) {
  console.log("kids menu");
} else {
  console.log("You're 10! We didn't plan for this!!!");
}
// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *
// I wrapped this so we could change the value of num after the first run of the statement
// to compare the outputs and verify that it behaves correctly both when it is and is not
// 0, not just when it is 0. This is NOT a requirement, just a good habit that I wanted
// to demonstrate here.
function checkNum(num) {
  if (num === 0) {
    console.log("The number is zero");
  }
}

// calling the function with each of two values to compare output (or lack of!)
// this one is using 0 so it should console log our statement.
checkNum(num);

// now we change to 1 and rerun the statement to verify that it does NOT print
// to the console, since the condition is not met from our if statement now and no
// else statement exists
num = 1;

checkNum(num);
