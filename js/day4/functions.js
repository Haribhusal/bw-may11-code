

// function function_name() {
// statements
// return
// }



// eg - function definition
// function addTwoNumbers() {
//     let a = 10;
//     let b = 20;
//     let c = a + b
//     return c
// }


// let result = addTwoNumbers();
// result => reference to a function

// console.log(result)

// eg - function definition
// function addTwoNumbers(a, b) {
//     //here a, b are parameters
//     let c = a + b
//     return c
// }

// let result = addTwoNumbers(20, 30);
// let result2 = addTwoNumbers(40, 60);
// let result3 = addTwoNumbers(345, 520);
// this way we can reuse the function
// here 20, 30 are arguments
// result => reference to a function

// console.log(result)
// console.log(result2)
// console.log(result3)

// Write a function that squares the given number

// function squareNum(num) {
//     return num * num
// }

// console.log(squareNum(8))
// console.log(squareNum(123))

// function checkOddEven(testNum) {
//     if (testNum % 2 == 1) {
//         console.log(testNum + "is odd number")
//     } else {
//         console.log(testNum + "is even number")
//     }
// }
// checkOddEven(10);

// function checkOddEven(number) {

//     if (number % 2 == 1) {
//         return "Odd"
//         console.log('hey')
//     } else {
//         return "Even"
//         console.log('no read')
//     }
// }

// let result = checkOddEven(10);
//  checkOddEven(10); we call it: invoked a function/ called the function
// console.log(result)
// if (result == "Odd") {
//     console.log("Given number is Odd Number")
// } else {
//     console.log("Given number is Even Number")
// }



// function greet(name) {
//     console.log("Namaste" + " " + name + ", You are welcome")
//     // String concatenation
// }

// greet("Sugam");



// let price = 500;
// let discountPercentage = 10;
// find the price after discount

// function calculateDiscount(price, discountPercentage) {
//     return price - (price * discountPercentage / 100)
// }
// console.log(calculateDiscount(52401, 60))


// function calculateDiscount(price) {
//     return price - (price * 10 / 100)
// }
// console.log(calculateDiscount(52401))



// function calculateDiscount(price, discountPercentage = 10) {
//     // heere discountPercentage = 10, we call it a default parameter.
//     return price - (price * discountPercentage / 100)
// }
// console.log(calculateDiscount(52401))
// console.log(calculateDiscount(52401, 30))



// function isEmailValid(email) {
//     return email.includes("@");
// }
// console.log(isEmailValid('bhusalhari89gmail.com'))