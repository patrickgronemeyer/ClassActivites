// you will need to watch the class video

// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: "the key is 1"
};

// what will the following lines print?
console.log(obj[key]); //the key is 'key'
console.log(obj.key); //the key is 1
console.log(obj["key"]); //undefined

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.

const car = {
  color: ["red", "black"],
  make: "GMC",
  yukon: true,
  year: 2010
};

// Name one of the four properties "collection" and set its value to an Array or Object.

car.collection = [1998, 2005, 2010, 2021];

// Access a value in the "collection" property
console.log(car.collection[1]); // Outputs: 2

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Inception",
  number: 7,
  color: "blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
// This will print six lines (since arrays are 0-indexed, key will be the index, not the value of keys). Each line will likely show undefined since obj doesn't have properties matching the array index.

// Use a template literal to print a sentence about your favorite things
console.log(
  `My favorite movie is ${obj.favorites.movie}, number is ${obj.favorites.number}, and color is ${obj.favorites.color}.`
);

// Access the values "b", 4, and 6 from obj.list

// Access "b": obj.list[1]
// Access 4: obj.list[4][1] (since it's in a nested array)
// Access 6: obj.list[5].f (accessing property f of the object at index 5)
// These examples showcase how to use JavaScript objects, arrays, and nested data structures, demonstrating key principles of accessing and manipulating data within JavaScript objects and arrays.
