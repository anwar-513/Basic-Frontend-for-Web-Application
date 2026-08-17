/**
 * Exercise 6: Ternary Operator
 * Section: 08 - Control Flow
 *
 * Task:
 * Convert this if-else statement to a ternary operator:
 *
 * let weather
 * if (temperature > 75) {
 *   weather = "hot"
 * } else {
 *   weather = "not hot"
 * }
 */

function getWeather(temperature) {
  const weather = temperature > 75 ? "hot" : "not hot"
  return weather
}

console.log(getWeather(80)) // "hot"
console.log(getWeather(60)) // "not hot"
