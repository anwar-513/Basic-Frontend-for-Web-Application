/**
 * Exercise 9: Recursion
 * Section: 08 - Control Flow
 *
 * Task:
 * Write a recursive function that finds the maximum value in a nested array
 * structure like this:
 *
 * const data = [1, [2, 3], [4, [5, 6]], 7]
 * // Should return 7
 * // You can use Array.isArray() to check if an item is an array
 */

function findMax(arr) {
  let max = -Infinity

  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursive case: if item is an array, find max in that array
      const subMax = findMax(item)
      max = Math.max(max, subMax)
    } else {
      // Base case: if item is a number, compare with current max
      max = Math.max(max, item)
    }
  }

  return max
}

const data = [1, [2, 3], [4, [5, 6]], 7]
console.log(findMax(data)) // 7

const data2 = [10, [20, [30, [40, 50]]], 5]
console.log(findMax(data2)) // 50
