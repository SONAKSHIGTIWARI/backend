function divide(a, b) {
    try {
        // Check if b is zero
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        // Handle error
        console.error("Error:", error.message);
        return null; // Return null or some default value
    } finally {
        // This block is always executed, regardless of whether there was an error
        console.log("Execution completed.");
    }
}

// Test cases
console.log(divide(10, 2)); // Should return 5
console.log(divide(10, 0)); // Should return an error message and null

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]

console.log(arr[0]); // 1 (first element)
console.log(arr[arr.length - 1]); // 5 (last element)

let doubled = arr.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

console.log(arr.indexOf(3)); // 2 (position of 3)
console.log(arr.indexOf(10)); // -1 (not found)

console.log(arr.indexOf(3)); // 2 (position of 3)
console.log(arr.indexOf(10)); // -1 (not found)
