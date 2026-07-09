let distance = 452;
const mileage = 15.5;
const fuelPrice = 272.3;

let litersNeeded = distance / mileage;
let totalCost = litersNeeded * fuelPrice;

console.log("Total Distance:         $" + distance);
console.log("Car's Mileage:          $" + mileage);
console.log("Fuel Price per Liter:   $" + fuelPrice);

console.log("Total liters needed:    $" + Math.ceil(litersNeeded));
console.log("Total Cost of Fuel:     $" + totalCost.toFixed(2));
