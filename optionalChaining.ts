// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.

// Instructions:

// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested
// object using optional chaining.

type Employee = {
  name: string;
  address?: {
    city?: string;
  };
};

function getEmployeeCity(employee: Employee): string | undefined {
  return employee.address?.city;
}

const employee1: Employee = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

const employee2: Employee = {
  name: "Bob",
};

console.log(getEmployeeCity(employee1));
console.log(getEmployeeCity(employee2));
