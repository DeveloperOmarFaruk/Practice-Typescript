"use strict";
// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Asynchronous function to simulate fetching user data
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: "John Doe",
                    age: 25,
                });
            }, 2000);
        });
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Fetching user data...");
    const user = yield fetchUserData();
    console.log("User data:", user);
}))();
// output
// Fetching user data...
// User data: { name: 'John Doe', age: 25 }
