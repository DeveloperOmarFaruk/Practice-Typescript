// Task 11: Unknown Type
// Objective: Handle different types with the unknown type.

// Instructions:

// Write a function processData(data: unknown) that:
// Checks if data is a string and returns the uppercased version.
// If data is a number, returns the square of it.

function processData(data: unknown): string | number | undefined {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  } else {
    return undefined;
  }
}

console.log(processData("hello")); // Output: "HELLO"
console.log(processData(4)); // Output: 16
console.log(processData(true)); // Output: undefined
