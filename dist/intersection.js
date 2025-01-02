"use strict";
// Task 8: Intersection Types
// Objective: Practice using intersection types.
function describeAdmin(user) {
    return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
}
const admin = {
    name: "John Doe",
    email: "john.doe@example.com",
    adminLevel: 5,
};
console.log(describeAdmin(admin));
// Output: "John Doe (john.doe@example.com) is an admin with level 5."
