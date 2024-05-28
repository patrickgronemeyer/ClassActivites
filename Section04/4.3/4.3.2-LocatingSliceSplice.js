const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstIndexOfA = arr.indexOf("a");
const firstIndexOfB = arr.indexOf("b");
const firstIndexOfC = arr.indexOf("c");

console.log(`First index of 'a': ${firstIndexOfA}`); // Outputs: 0
console.log(`First index of 'b': ${firstIndexOfB}`); // Outputs: 2
console.log(`First index of 'c': ${firstIndexOfC}`); // Outputs: 4

// find the last index of "a", "b", and "c"

const lastIndexOfA = arr.lastIndexOf("a");
const lastIndexOfB = arr.lastIndexOf("b");
const lastIndexOfC = arr.lastIndexOf("c");

console.log(`Last index of 'a': ${lastIndexOfA}`); // Outputs: 6
console.log(`Last index of 'b': ${lastIndexOfB}`); // Outputs: 8
console.log(`Last index of 'c': ${lastIndexOfC}`); // Outputs: 11

// if the first index and last index of "a" is not the same, remove the last instance

while (arr.indexOf("a") !== arr.lastIndexOf("a")) {
  const lastIndexA = arr.lastIndexOf("a");
  arr.splice(lastIndexA, 1); // Remove the last occurrence of 'a'
}

console.log(arr); // Outputs the modified array with only one 'a'

// repeat until there is just one "a"
function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
  }
  return array;
}

console.log(removeDuplicates(arr, "a"));

for (lastA; firstA !== lastA; lastA = arr.lastIndexOf("a")) {
  arr.splice(lastA, 1);
  console.log(arr);
}
