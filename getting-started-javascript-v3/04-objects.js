/**
 * Exercise 4: Objects
 * Section: 07 - Advanced Variables
 *
 * Task:
 * Create an object called book with the following properties:
 * 1. title - the book title
 * 2. author - an object with firstName and lastName
 * 3. yearPublished - the year the book was published
 * 4. publish - A function that prints the message "Publishing your book"
 */

const book = {
  title: "The Way of Kings",
  author: {
    firstName: "Brandon",
    lastName: "Sanderson",
  },
  yearPublished: 2010,
  publish() {
    console.log("Publishing your book")
  },
}

console.log(book.title) // "The Way of Kings"
console.log(`${book.author.firstName} ${book.author.lastName}`) // "Brandon Sanderson"
console.log(book.yearPublished) // 2010
book.publish() // "Publishing your book"
