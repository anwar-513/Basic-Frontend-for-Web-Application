let fragile = 0;
let heavy = 0;
let standard = 0;

let fragileHeavy = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        fragileHeavy++
    }
    if (i % 3 == 0) {
        fragile++;
    }
    else if (i % 5 == 0) {
        heavy++
    }
    else {
        standard++
    }
}

console.log("Total Fragile:                " + fragile)
console.log("Total Heavy:                  " + heavy)
console.log("Total Fragile & and Heavy:    " + fragileHeavy)
console.log("Total Standard:               " + standard)