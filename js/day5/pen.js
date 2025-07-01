// let penBrand = "VS Liquid"
// let color = "Black"
// let height = "10cm"
// let price = 100;
// let isPurchase = true


let pen = {
    brand: "VS Liquid",
    color: "Black",
    height: "10cm",
    price: 100,
    isPurchased: true
}

let pen2 = {
    brand: "VS Liquid 2",
    color: "Red",
    height: "12cm",
    price: 200,
    isPurchased: false
}

console.log(pen.height)
// We can access the property of an object by using ., we call it dot notation.


console.log(pen['price'])
// we also can access the property of an object by using ['property_name'], we call it a bracket notation.




let animal = {
    name: "Dog",
    age: 2,
    speak: function () {
        return this.name + 'barks'
    }
}

let res = animal.speak();
console.log(res)

// let animal2 = {
//     name: "Cat",
//     age: 1,
//     speak: function () {
//         return this.name + "Meow"
//     }
// }