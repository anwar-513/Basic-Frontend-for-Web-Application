/**
 * Exercise 2: Closures
 * Section: 06 - Scope
 *
 * Task:
 * Create a function called createGreeter that:
 * 1. Takes a greeting parameter (like "Hello" or "Hi")
 * 2. Returns a function that takes a name parameter
 * 3. The returned function should log the greeting + name
 */

function createGreeter(greeting) {
  return (name) => {
    console.log(greeting + " " + name)
  }
}

const sayHello = createGreeter("Hello")
const sayHi = createGreeter("Hi")

sayHello("Kyle") // "Hello Kyle"
sayHi("Sarah") // "Hi Sarah"
