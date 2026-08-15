/**
 * Exercise 1: Passing Functions as Arguments (Callbacks)
 * Section: 05 - Functions
 *
 * Task:
 * Create a function that:
 * 1. Takes three parameters: a firstName, a lastName, and a callback function
 * 2. Creates a fullName variable by combining the first and last names
 * 3. Passes the fullName to the callback function (which prepends "Hello " to it)
 * 4. Prints out the return of the callback function
 */

function printGreeting(firstName, lastName, callback) {
  const fullName = firstName + " " + lastName
  console.log(callback(fullName))
}

function getGreeting(name) {
  return "Hello " + name
}

printGreeting("Kyle", "Cook", getGreeting) // "Hello Kyle Cook"
printGreeting("Ada", "Lovelace", getGreeting) // "Hello Ada Lovelace"
