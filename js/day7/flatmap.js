// // const myArr = [1, 2, 3, 4, 5, 6];
// // const newArr = myArr.flatMap(x => [x, x * 10]);
// // console.log(newArr)

// const orders = [
//     {
//         orderId: 1,
//         items: [
//             { name: "Laptop", price: 1200 },
//             { name: "Mouse", price: 50 }
//         ]
//     },
//     {
//         orderId: 2,
//         items: [
//             { name: "Headphones", price: 200 }
//         ]
//     },
//     {
//         orderId: 3,
//         items: [
//             { name: "Monitor", price: 300 },
//             { name: "Keyboard", price: 100 }
//         ]
//     }
// ];

// // Use flatMap to get a flat array of all items from all orders
// const allItems = orders.flatMap(order => order.items);

// // [
// //   { name: "Laptop", price: 1200 },
// //   { name: "Mouse", price: 50 },
// //   { name: "Headphones", price: 200 },
// //   { name: "Monitor", price: 300 },
// //   { name: "Keyboard", price: 100 }
// // ]
// console.log(allItems);
// console.log(allItems.map(item => item.price))

// // Output:
