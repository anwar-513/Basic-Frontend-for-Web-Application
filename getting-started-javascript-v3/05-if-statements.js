/**
 * Exercise 5: If Statements
 * Section: 08 - Control Flow
 *
 * Task:
 * Write an if statement that:
 * 1. Checks if a person can get a driver's license
 * 2. Requirements: Must be at least 16 years old AND have completed driver's education
 * 3. If they can get a license, log "You can get your license!"
 * 4. If they're too young, log "You must be at least 16"
 * 5. If they haven't completed driver's ed, log "You need to complete driver's education"
 */

function checkLicenseEligibility(age, hasDriversEd) {
  if (age < 16) {
    console.log("You must be at least 16")
  } else if (!hasDriversEd) {
    console.log("You need to complete driver's education")
  } else {
    console.log("You can get your license!")
  }
}

checkLicenseEligibility(17, true) // "You can get your license!"
checkLicenseEligibility(15, true) // "You must be at least 16"
checkLicenseEligibility(17, false) // "You need to complete driver's education"
