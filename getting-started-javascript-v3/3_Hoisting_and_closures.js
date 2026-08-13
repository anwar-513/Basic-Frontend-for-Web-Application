// Hoisting: var declarations are moved to the top of their scope,
// but only the declaration — not the value.
console.log(hoistedVar); // undefined (not an error)
var hoistedVar = "I'm hoisted";

// Closure: an inner function "remembers" variables from its
// outer function, even after the outer function has finished running.
function makeCounter() {
    let count = 0; // this stays alive because of the closure below
    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3