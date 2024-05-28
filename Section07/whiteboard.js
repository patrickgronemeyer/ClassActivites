// Question 4
// Write a function that counts the number of vowels in a string. The vowels are "a", "e", "i", "o" & "u"

// findVowels("hello"); // --> 2
// findVowels("why"); // --> 0

// use function
// Get down what we for sure know. count starts at 0, state vowels aeiou,
// for of loop to iterate over the provided string
// it will end return

function findVowels(string) {
  const vowels = ["a", "e", "i", "o"];
  let count = 0;
  for (let letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

const string = "hello";
console.log(findVowels(string));

// AEUIO is for edge case
