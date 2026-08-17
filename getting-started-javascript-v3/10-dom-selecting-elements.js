/**
 * Exercise 10: Selecting Elements
 * Section: 09 - The DOM
 *
 * Task:
 * Given the HTML in 10-dom-selecting-elements.html, write JavaScript to:
 * 1. Change the header text to "Welcome!"
 * 2. Make all paragraphs blue
 * 3. Hide the last paragraph
 * 4. Add a border to inputs with the "required" class
 */

// 1. Change header text
document.querySelector("#main-header").textContent = "Welcome!"

// 2. Make all paragraphs blue
document.querySelectorAll("p").forEach((p) => {
  p.style.color = "blue"
})

// 3. Hide the last paragraph
const paragraphs = document.querySelectorAll("p")
paragraphs[paragraphs.length - 1].style.display = "none"

// 4. Add a border to inputs with the "required" class
document.querySelectorAll("input.required").forEach((input) => {
  input.style.border = "2px solid red"
})
