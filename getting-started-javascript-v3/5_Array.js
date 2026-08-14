// A simple array — just a list of values
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits.length); // 3

fruits.push("orange"); // add an item to the end
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// A nested array — an array that contains other arrays
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing a nested value: first pick the row, then the item in that row
console.log(grid[0]); // [1, 2, 3]        (the whole first row)
console.log(grid[1][2]); // 6                (row index 1, item index 2)

// Looping through a nested array — one loop for rows, one for items in each row
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    console.log(`grid[${row}][${col}] = ${grid[row][col]}`);
  }
}
// Output:
// grid[0][0] = 1
// grid[0][1] = 2
// grid[0][2] = 3
// grid[1][0] = 4
// ...and so on
