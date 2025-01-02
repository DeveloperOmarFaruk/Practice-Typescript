// Task Reuiremets

// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

function userInfo(
  name: string,
  age: number,
  role: "admin" | "user" | "guest" = "guest"
): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Role: ${role}`);
}

userInfo("Omar Faruk", 25, "admin");
userInfo("Faruk Khan", 40);

// Output
// Name: Omar Faruk;
// Age: 25;
// Role: admin;

// Name: Faruk Khan
// Age: 40
// Role: guest
