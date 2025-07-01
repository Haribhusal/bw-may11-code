// // In your library
// const validatedSymbol = Symbol('validated');

// function validateUser(user) {
//     // Perform some validation logic here
//     user[validatedSymbol] = true;
// }

// function isUserValidated(user) {
//     return !!user[validatedSymbol];
// }

// // User's object
// const user = {
//     name: "Alice",
//     role: "admin",
//     // "validated": false,

// };

// // validateUser(user);

// // console.log(isUserValidated(user)); // true
// // console.log(user.validated);
// // user.validated = true;       // undefined – no public property added
// // console.log(Object.keys(user));     // ["name", "role"]
// // console.log(user);                  // Symbol not visible in standard inspection
