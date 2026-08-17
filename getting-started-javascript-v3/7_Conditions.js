const age = 20;
const hasID = true;

// Basic if / else if / else
if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else {
  console.log("Adult");
}
// Output: Adult

// Nested if — an if statement inside another if statement
if (age >= 18) {
  if (hasID) {
    console.log("Entry allowed");
  } else {
    console.log("Entry denied — ID required");
  }
} else {
  console.log("Entry denied — too young");
}
// Output: Entry allowed

// Ternary operator — a shorthand for a simple if/else
// syntax: condition ? valueIfTrue : valueIfFalse
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult
