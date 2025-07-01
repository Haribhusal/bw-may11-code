// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value;
// }

// // console.log(sum)

// const cart = [
//     { name: "Laptop", price: 1200, quantity: 1 },
//     { name: "Headphones", price: 200, quantity: 2 },
//     { name: "Mouse", price: 50, quantity: 3 }
// ];

// // Calculate the total amount to pay
// const totalAmount = cart.reduce((total, product) => {
//     return total + product.price * product.quantity;
// }, 0);

// console.log(totalAmount);
// // Output: 1750

// const pathParts = ["users", "john", "documents", "file.txt"];

// // Use reduceRight to build the path from right to left
// const fullPath = pathParts.reduceRight((acc, part) => {
//     return acc === "" ? part : part + "/" + acc;
// }, "");

// console.log(fullPath);
// Output: users/john/documents/file.txt

// const arr = ["a", "b", "c"];

// const left = arr.reduce((acc, val) => acc + val);      // "abc"
// const right = arr.reduceRight((acc, val) => acc + val); // "cba"

// const tags = ["<div>", "<section>", "<p>"];
// const content = "Hello, world!";

// // Use reduceRight to wrap the content with tags from innermost to outermost
// const wrapped = tags.reduceRight((acc, tag) => {
//     // Insert closing tag by replacing '<' with '</' and removing '>'
//     const closingTag = tag.replace('<', '</');
//     return tag + acc + closingTag;
// }, content);

// console.log(wrapped);
// Output: <div><section><p>Hello, world!</p></section></div>

// const discounts = [
//     total => total * 0.9,        // 10% off
//     total => total - 20,         // $20 off
//     total => total * 0.95        // 5% off
// ];

// const cartTotal = 200;

// Apply discounts from right to left (last discount first)
// const finalTotal = discounts.reduceRight((acc, discountFn) => discountFn(acc), cartTotal);

// console.log(finalTotal);
// Calculation steps:
// 1. 200 * 0.95 = 190
// 2. 190 - 20 = 170
// 3. 170 * 0.9 = 153
// Output: 153
// const name = "Hari";

// console.log(name.split(''))
// const reversed = name.split('').reduceRight((acc, char) => acc + char);

// console.log(reversed);
// // Output: "iraH"