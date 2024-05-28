const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable

// Concatenate arrTwo, 4, and "e" to arrOne
const arrThree = arrOne.concat(arrTwo, 4, "e");

// Print the new, merged array
console.log(arrThree);
// Prints ["a", [0], "b", 1, 2, "c", ["d", 3], 4, "e"]
console.log(arrThree.reverse());

// join the merged array and print the result
let newString = arrThree.join(", and the next value is ");
// console.log(typeof newString);

// Join the merged array into a string, separating each element with a comma (default)
const joinedResult = arrThree.join(); // Default separator is a comma
console.log(joinedResult);
//Prints a,0,b,1,2,c,d,3,4,e

// Alternatively, you could join with a different separator like a space or a custom character
const joinedWithSpace = arrThree.join(" "); // Using a space as a separator
console.log(joinedWithSpace);
//Prints a 0 b 1 2 c d 3 4 e

// Write a function that accepts one string as an argument and returns a statement
// declaring whether it is or is not a palindrome
function palindromeTest(word) {
  let revword = word
    .split("")
    .reverse()
    .join("");
  if (word === revword) {
    console.log("Equal");
  } else {
    console.log("Nope");
  }
}

palindromeTest("racecar");
