/**
 * Exercise 8: For Loops
 * Section: 08 - Control Flow
 *
 * Task:
 * Write a for loop that:
 * 1. Creates an array of the first 10 even numbers (2, 4, 6, 8, ...)
 * 2. Then calculates the sum of those numbers in a second loop
 * 3. Finally, prints the array and the sum
 */

// Create array of first 10 even numbers
const evenNumbers = []
for (let i = 1; i <= 10; i++) {
  evenNumbers.push(i * 2)
}

// Calculate sum
let sum = 0
for (let i = 0; i < evenNumbers.length; i++) {
  sum += evenNumbers[i]
}

console.log("Even numbers:", evenNumbers) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log("Sum:", sum) // 110
