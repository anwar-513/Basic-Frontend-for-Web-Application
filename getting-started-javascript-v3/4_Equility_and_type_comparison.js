// == compares values only, converting types if needed ("loose equality")
console.log(5 == "5");     // true  (string "5" is converted to number 5)
console.log(0 == false);   // true  (false is converted to 0)

// === compares both value AND type, no conversion ("strict equality")
console.log(5 === "5");    // false (number vs string)
console.log(0 === false);  // false (number vs boolean)

// Best practice: use === almost always, to avoid unexpected type conversion bugs
console.log(5 === 5);      // true