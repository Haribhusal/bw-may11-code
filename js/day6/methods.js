// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();
// console.log(myList)
// console.log(typeof myList)
// console.log(fruits.at(3))
// console.log(fruits[3])


// let newItems = fruits.join(', ')
// console.log(newItems)



// const names = ["Ram", "Shyam", "Hari"];
// const sentence = `Participants: ${names.join(", ")}.`;
// console.log(sentence);  // "Participants: Ram, Shyam, Hari."


// ?from=search_history&q=watch&service=mall&price=1000-2000&ppath=8:2408

// const selectedFilters = ["price-low", "in-stock", "rating-4"];
// const queryString = selectedFilters.join("&filter=");
// console.log(`?filter=${queryString}`);


// const chars = ['H', 'e', 'l', 'l', 'o'];
// const word = chars.join(' -');
// console.log(word); // "Hello"

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push('Grapes')
// console.log(fruits)
// fruits.pop();
// console.log(fruits)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.shift();
// // console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");

// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Lemon"
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Test Fruit"];
// console.log(fruits.length)

// console.log(fruits[fruits.length - 1])



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[2]
// console.log(fruits)


// let evenNumbers = [2, 4, 6, 8]
// let oddNumbers = [1, 3, 5, 7, 9]
// let tenToFifteen = [10, 11, 12, 13, 14, 15]

// let allNumbers = [...evenNumbers, ...oddNumbers, ...tenToFifteen] // es6 features 
// console.log(allNumbers)

// let newConcated = evenNumbers.concat(oddNumbers, tenToFifteen)

// console.log(newConcated)


// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");
// console.log(myChildren)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let copied = fruits.copyWithin(2, 0);
// console.log(copied)


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Grapes"];
// let copied = fruits.copyWithin(2, 0, 4);
// console.log(copied)

// let nums = [[1, 2], [3, 4], [5, [6, [7, 8]]]]
// let newArray = nums.flat(3);
// console.log(newArray)


// Splicing and Slicing Arrays



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newArray = fruits.toSpliced(2, 1);
// // fruits.splice(2, 1);
// // console.log(fruits)
// console.log(newArray)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "grapes", "pineapple"];
// let newSLice = fruits.slice(1, 4)
// console.log(newSLice)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "grapes", "pineapple"];
// // // console.log(fruits.indexOf("Apple"))
// // console.log(fruits.lastIndexOf("Apple"))
// console.log(fruits.includes('Apple'))



// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, numbers) {
//     console.log(index)
//     if (numbers.length < 10) {
//         return value > 26;
//     }
// }


// console.log(first)



// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

// console.log(first)


// const temp = [27, 28, 30, 50, 40, 42, 35, 30, 55];
// let high = temp.findLast(x => x > 40);

// console.log(high)


// const temp = [27, 28, 30, 40, 42, 35, 30, 45, 32, 10];
// let pos = temp.findLastIndex(x => x > 40);

// console.log(pos)