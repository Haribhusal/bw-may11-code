const person = {
    name: "Hari",
    // secretKey: 'dasdads'
};

// Create a symbol
// const secretKey = Symbol("secret");

// Add symbol-keyed property
// person[secretKey] = "This is hidden";

// Access properties
// console.log(person.name);           // "Hari"
// console.log(person[secretKey]);     // "This is hidden"

// Try to loop through all properties
// for (let key in person) {
//     console.log(key);                 // Only prints "name"
// }

// Check all visible keys
// console.log(Object.keys(person));   // ["name"]

// But the symbol key is still there:
// console.log(Object.getOwnPropertySymbols(person));
// [ Symbol(secret) ]
