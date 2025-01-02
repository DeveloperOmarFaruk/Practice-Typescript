"use strict";
// Task 15: Type Guards
// Objective: Create custom type guards for more accurate type checking.
// Instructions:
// Write a function isString(value: unknown): value is string that checks if a value is a string.
// Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.
function isString(value) {
    return typeof value === "string";
}
// Function that uses the type guard
function printUpperCase(value) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log("The provided value is not a string.");
    }
}
printUpperCase("hello"); // Output: "HELLO"
printUpperCase(123); // Output: "The provided value is not a string."
