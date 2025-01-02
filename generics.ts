// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.

// Instructions:

// Create a generic function that:
// Accepts an array of any type.
// Returns a new array with duplicate values removed.

// Generic function to remove duplicates from an array
function removeDuplicates<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

const strings = ["apple", "banana", "apple", "orange"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueStrings); // Output: ["apple", "banana", "orange"]
