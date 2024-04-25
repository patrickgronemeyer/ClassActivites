// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4);
//This comparison involves two primitive numbers that are identical.
//Result: true, because primitive values are compared by their actual value.

console.log("Hello, world" === "Hello, world");
//This involves two identical string primitives.
//Result: true, because identical string primitives are also compared by value.

let x = false;
let y = x;
console.log(x === y);
//y is assigned the value of x, both are boolean primitives and identical.
//true, because both x and y have the same value.
x = !x;
console.log(x === y);
//x is toggled to true, while y remains false.
//false, because x and y now hold different boolean values.

console.log([1, 2, "c"] === [1, 2, "c"]);
//This compares two different array objects that have identical contents.
//Result: false, because although the arrays look the same, they are different objects in memory (compared by reference).

console.log({} === {});
//This compares two different empty object literals.
//Result: false, because each {} creates a new object, so they reference different locations in memory.

y = { id: 1 };
x = y;
console.log(x === y);
//Here, x and y reference the same object.
//Result: true, because both x and y point to the exact same object.

y.id += 1;
console.log(x.id === y.id);
//y.id is modified, and since x and y reference the same object, x.id is also affected.
//Result: true, as both x.id and y.id now equal 2 and are properties of the same single object.
