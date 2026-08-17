/**
 * Exercise 7: Switch Statements
 * Section: 08 - Control Flow
 *
 * Task:
 * Create a switch statement that takes a month number (1-12) and returns the season:
 * - December (12), January (1), February (2): "Winter"
 * - March (3), April (4), May (5): "Spring"
 * - June (6), July (7), August (8): "Summer"
 * - September (9), October (10), November (11): "Fall"
 */

function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter"
    case 3:
    case 4:
    case 5:
      return "Spring"
    case 6:
    case 7:
    case 8:
      return "Summer"
    case 9:
    case 10:
    case 11:
      return "Fall"
    default:
      return "Invalid month"
  }
}

console.log(getSeason(1)) // "Winter"
console.log(getSeason(4)) // "Spring"
console.log(getSeason(7)) // "Summer"
console.log(getSeason(10)) // "Fall"
console.log(getSeason(13)) // "Invalid month"
