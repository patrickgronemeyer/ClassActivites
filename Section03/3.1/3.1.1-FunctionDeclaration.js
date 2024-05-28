// TODO: using the function expressions below, refactor them into function declarations

// greet function expression
const greet = function() {
  console.log("Hello!");
};

// greet function declaration
function greet() {
  console.log("Hello!");
};
// threeModTwo function expression
const threeModTwo = function() {
  console.log(3 % 2);
};
// threeModTwo function declaration
function threeModTwo() {
  console.log(3 % 2);
};
//CheckDrivingAge function expression
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// CheckDrivingAge function declaration
function checkDrivingAge() {
  let age = 18;  // Ensure the age variable is included if it is not globally defined
  if (age >= 16) {
      console.log(true);
  } else {
      console.log(false);
  }
};
