// Named Parameters
// write a function that takes two named parameters
// print each named parameter,
// then return the parameters added together
function sumNumbers(a, b) {
  console.log("Parameter a:", a);
  console.log("Parameter b:", b);
  return a + b;
}

// invoke the function and pass in two numbers
sumNumbers(5, 7); // Outputs: Parameter a: 5, Parameter b: 7

// invoke the function and pass in more than two numbers
sumNumbers(5, 7, 10); // Still only uses the first two parameters

// invoke the function and pass in only one number
sumNumbers(8); // Outputs: Parameter a: 8, Parameter b: undefined

// change the function to set default values for the parameters
function sumNumbersWithDefaults(a = "cheese", b = "peppporoni") {
  console.log("Parameter a:", a);
  console.log("Parameter b:", b);
  return a + b;
}

// again, invoke the function and pass in only one number
sumNumbersWithDefaults(10); // Outputs: Parameter a: 10, Parameter b: 0

// Rest Operator
// add a rest operator to the function's parameters
function sumNumbersWithRest(a = 0, b = 0, ...rest) {
  console.log("Parameter a:", a);
  console.log("Parameter b:", b);
  console.log("Rest of parameters:", rest); // This line already prints the value of the rest operator
  return a + b + rest.reduce((acc, current) => acc + current, 0);
}
// add a line to the function's body to print the value of the rest operator
console.log(sumNumbersWithRest(3, 4, 5, 6)); // Outputs: Parameter a: 3, Parameter b: 4, Rest of parameters: [5, 6]

// again, invoke the function and pass in more than two numbers
sumNumbersWithRest(3, 4, 5, 6); // Outputs: Parameter a: 3, Parameter b: 4, Rest of parameters: [5, 6]
