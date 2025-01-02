"use strict";
// Task 5: Function Type
// Objective: Write a function that reverses a string.
// Instructions:
// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"
function reverseString(input) {
    return input.split("").reverse().join("");
}
const input = "hello";
const output = reverseString(input);
console.log(output);
