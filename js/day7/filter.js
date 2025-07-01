// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

const products = [
    { id: 1, name: "Laptop", quantity: 5 },
    { id: 2, name: "Headphones", quantity: 0 },
    { id: 3, name: "Mouse", quantity: 12 },
    { id: 4, name: "Monitor", quantity: 0 },
    { id: 5, name: "Keyboard", quantity: 7 }
];

// Filter products that are in stock
// const inStockProducts = products.filter(product => product.quantity > 0);
const outOfStockProducts = products.filter(product => product.quantity == 0);

// console.log(over18);
// console.log(inStockProducts);
console.log(outOfStockProducts)