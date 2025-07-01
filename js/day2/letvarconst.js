var nameOfUser = "Hari"  // variable declaration // variable definition
var nameOfUser = "Sugam"
nameOfUser = " Diwakar"  // update the value   // Mutate it

// console.log(name)


let age = 20;
// let age = 30;  // can not re-declare 
age = 40;  // value update  is allowed



const PI = 3.14
// const PI = 3.1415  // can no re-declare
// PI = 3.141567

console.log(PI)



// global scope  VAR
// block scope LET, CONST

let isMarried = true;

if (isMarried) {
    var message = "Hi"
    console.log("Go to home and say" + message)
} else {
    console.log("Go to Party and say something")
}

console.log(message)


// We had a problem in VAR, what was that?