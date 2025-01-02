// Task 7: Type Assertion and Narrowing
// Objective: Write a function that behaves differently based on the input type.

// Instructions:

// Create a function that accepts a parameter of type string | number.
// The function should:
// Return the length if the input is a string.
// Return the square if the input is a number.

function processInput(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input * input;
  }
}

console.log(processInput("hello")); // Output: 5 (length of the string)
console.log(processInput(4)); // Output: 16 (square of the number)
