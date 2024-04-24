// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function
// function addNumbersFrom1To100()

function addNumbersFrom1To100() {
  let total = 0;
  for (let i = 1; i <= 100; i++) {
    total += i;
  }
  return total;
}

// invoke the function and console.log its value
const result = addNumbersFrom1To100();
console.log(result); // Expected to log 5050

// try to print the variable "total" outside the function
// ? what do you expect ?
// console.log(total); // Uncommenting this line will result in a ReferenceError: total is not defined
//The variable total is defined within the addNumbersFrom1To100 function, making it local to that function. Thus, it is not accessible outside the function. Attempting to print it outside the function will result in a ReferenceError because it is not defined in that scope.

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?

//const childVariable = "I am in the child's scope";  place variable above function or on global scale. will make childvariable print

function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  console.log("Parent Scope, Child Variable:", childVariable); // This will not print
}
//This is because childVariable is defined within the childScope function, making it local to that function and not accessible from the parentAndChildScope function. Attempting to access it will result in a ReferenceError because childVariable is not defined in the parent function's scope.
