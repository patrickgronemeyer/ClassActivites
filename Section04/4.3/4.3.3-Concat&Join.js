const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variabl

// Concatenate arrTwo, 4, and "e" to arrOne
const arrThree = arrOne.concat(arrTwo, 4, "e");

// Print the new, merged array
console.log(arrThree);
// Prints ["a", [0], "b", 1, 2, "c", ["d", 3], 4, "e"]

// join the merged array and print the result

// Join the merged array into a string, separating each element with a comma (default)
const joinedResult = arrThree.join(); // Default separator is a comma
console.log(joinedResult);
//Prints a,0,b,1,2,c,d,3,4,e

// Alternatively, you could join with a different separator like a space or a custom character
const joinedWithSpace = arrThree.join(" "); // Using a space as a separator
console.log(joinedWithSpace);
//Prints a 0 b 1 2 c d 3 4 e
