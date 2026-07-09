
let itemPrice = 220;
let itemQauntity = 5;

const taxRate = (0.08);

let subTotal = (itemPrice * itemQauntity);
let texAmmount = (subTotal * taxRate)
let total = (subTotal + texAmmount);


console.log("Sub-Total     $" + subTotal.toFixed(2));
console.log("Tax Ammount   $" + texAmmount.toFixed(2))
console.log("Total         $" + total.toFixed(2));
