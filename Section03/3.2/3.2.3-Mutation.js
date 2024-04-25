let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

x = 0; // Falsy value
y = null; // Falsy value
z = undefined; // Falsy value

// print x, y, and z

console.log(x); // Output: 0
console.log(y); // Output: null
console.log(z); // Output: undefined

const a = "name";
const b = [];
const c = {};

// These lines would cause errors:
// a = "";    // TypeError: Assignment to constant variable.
// b = null;  // TypeError: Assignment to constant variable.
// c = undefined; // TypeError: Assignment to constant variable.

// try to reassign a, b, and c to FALSY values
// a = "";
// b = 0;
// c = NaN;

// using BRACKET NOTATION, assign a value to b
b[0] = "Hello"; // Adds "Hello" to the array at index 0

// using DOT NOTATION, assign a PROPERTY to c
c.color = "red"; // Adds a new property 'color' with the value "red"

// using DOT NOTATION, assign a METHOD to c
c.sayHello = function() {
  return "Hello, this is Rick!";
};

// using BRACKET NOTATION, call the method in c
console.log(c["sayHello"]()); // Outputs: "Hello, this is Rick!"

// print a, b, and c
console.log(a); // Outputs: "name"
console.log(b); // Outputs: ["Hello"]
console.log(c); // Outputs: {color: "red", sayHello: [Function: sayHello]}
// or console.log(a , b , c , etc)
