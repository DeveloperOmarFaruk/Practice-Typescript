"use strict";
// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.
function getEmployeeCity(employee) {
    var _a;
    return (_a = employee.address) === null || _a === void 0 ? void 0 : _a.city;
}
const employee1 = {
    name: "Alice",
    address: {
        city: "New York",
    },
};
const employee2 = {
    name: "Bob",
};
console.log(getEmployeeCity(employee1)); // Output: "New York"
console.log(getEmployeeCity(employee2)); // Output: undefined
