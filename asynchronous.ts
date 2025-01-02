// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.

// Instructions:

// Write an asynchronous function that:
// Simulates fetching user data (containing name and age).
// Returns the data after a short delay.

type UserInfo = {
  name: string;
  age: number;
};

// Asynchronous function to simulate fetching user data
async function fetchUserData(): Promise<UserInfo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 25,
      });
    }, 2000);
  });
}

(async () => {
  console.log("Fetching user data...");
  const user = await fetchUserData();
  console.log("User data:", user);
})();

// output
// Fetching user data...
// User data: { name: 'John Doe', age: 25 }
