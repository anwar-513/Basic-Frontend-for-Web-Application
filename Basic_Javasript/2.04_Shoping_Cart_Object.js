const cart = {
    items: [],
    totalItems: 0,

    addItem: function (item) {
        this.totalItems++;
        this.items.push(item);

    }
}


cart.addItem("Banana");
cart.addItem("Mango");
cart.addItem("kingro")

console.log(cart.items)
console.log(cart.totalItems)