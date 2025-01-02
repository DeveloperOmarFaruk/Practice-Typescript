// Task 16: Utility Types and Keyof Constraints
// Objective: Access object properties dynamically using keyof.

// Instructions:

// Create a function that:
// Takes an object and a key.
// Returns the property value from the object based on the provided key.
// Use keyof to constrain the key to valid properties of the object.

// Function to access object properties dynamically
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const userName = getProperty(user, "name");
const userAge = getProperty(user, "age");

console.log(userName); // Output: "Alice"
console.log(userAge); // Output: 30
