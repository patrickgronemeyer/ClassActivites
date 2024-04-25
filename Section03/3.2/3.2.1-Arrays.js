// create an Array using an Array literal
const arr = ["one", "two", "three", "four"];
// access the 1st item in the Array
console.log(arr[0]); // Outoputs: one
// access the last item in the Array
console.log(arr[3]); // Outoputs: four
// print the length of the Array
console.log(arr.length); // Outoputs: 4
// use the length property to access the last item in the Array
console.log(arr.length - 1); // Outoputs: 3
// with for...of, loop over the Array, modify the value and add to a different Array

for (let item of arr) {
  console.log(item);
} // Outoputs: one, two, three, four.
