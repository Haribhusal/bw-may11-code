

function calculate(a, b, c, callback) {
    let sum = a + b + c;
    callback(sum)
}



calculate(2, 3, 4, (value) => {
    let multiply = value * value;
    console.log(multiply)
})




// function addTwoNumbers(a, b) {
//     //here a, b are parameters
//     let c = a + b
//     return c
// }

// let result = addTwoNumbers(20, 30);