// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies,
// Family Members, Job, Skills, Marital Status, and Friends.

type Person = {
  name: string;
  address: string;
  hairColor: "black" | "brown" | "blonde" | "red" | "gray";
  eyeColor: "blue" | "green" | "brown" | "hazel";
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: "single" | "married" | "divorced";
  friends: string[];
};

const person: Person = {
  name: "John Doe",
  address: "123 Main St, City, Country",
  hairColor: "brown",
  eyeColor: "green",
  income: 5000,
  expense: 3000,
  hobbies: ["reading", "hiking", "gaming"],
  familyMembers: ["Jane Doe", "Mike Doe", "Lucy Doe"],
  job: "Software Engineer",
  skills: ["JavaScript", "TypeScript", "React"],
  maritalStatus: "single",
  friends: ["Alice", "Bob", "Charlie"],
};

console.log(person);
