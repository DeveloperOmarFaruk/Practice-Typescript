// Task 8: Intersection Types
// Objective: Practice using intersection types.

// Instructions:

// Create a type AdminUser that is an intersection of:
// User with properties name and email
// Admin with property adminLevel
// Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

interface User {
  name: string;
  email: string;
}

interface Admin {
  adminLevel: number;
}

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
  return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
}

const admin: AdminUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  adminLevel: 5,
};

console.log(describeAdmin(admin));
// Output: "John Doe (john.doe@example.com) is an admin with level 5."
