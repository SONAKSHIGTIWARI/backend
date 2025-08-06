// This is a single-line comment

/*
   This is a multi-line comment
*/

// Variables
let name = "John";  // Using 'let' to declare a variable
const age = 25;     // Using 'const' for a constant value

// Function definition
function greet(personName) {
    console.log("Hello, " + personName + "!");
}

// Calling the function
greet(name);

// Conditional statement (if-else)
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Loop (for loop)
for (let i = 0; i < 5; i++) {
    console.log("This is iteration number: " + i);
}

// Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Accessing the first element of the array

// Object
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
};

// Accessing object properties
console.log(person.firstName + " " + person.lastName);

// Using an arrow function
const add = (a, b
