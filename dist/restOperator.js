"use strict";
// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.
// Instructions:
// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
const result = sum(1, 2, 3, 4, 5);
console.log(result);
