let str = 'Hello, World!';
console.log(str.toUpperCase()); // Converts to uppercase
console.log(str.toLowerCase()); // Converts to lowercase
console.log(str.length); // Length of string
console.log(str.indexOf('World')); // Index of substring
console.log(str.replace('Hello', 'Hi')); // Replace substring

// b. Number methods
let num = 123.456;
console.log(num.toFixed(2)); // Fixed decimal places
console.log(num.toString()); // Convert to string
console.log(Number.isInteger(num)); // Check if integer
console.log(Math.round(num)); // Round to nearest integer
console.log(Math.sqrt(num)); // Square root

// c. Array methods
let arr = ['apple', 'banana', 'cherry'];
console.log(arr.length); // Array length
console.log(arr.join(', ')); // Join elements with separator
console.log(arr.indexOf('banana')); // Index of element
console.log(arr.push('date')); // Add element at end
console.log(arr.pop()); // Remove last element

// d. Date methods
let currentDate = new Date();
console.log(currentDate.toDateString()); // Date as string
console.log(currentDate.toTimeString()); // Time as string
console.log(currentDate.getFullYear()); // Year
console.log(currentDate.getMonth()); // Month (0-11)
console.log(currentDate.getDate()); // Day of the month

// e. Function Methods
function add(x, y) {
    return x + y;
}
console.log(add(2, 3)); // Calling the function
let sub = function(x, y) {
    return x - y;
};
console.log(sub(5, 2));