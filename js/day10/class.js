// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

class User {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    walk() {
        console.log(this.name + " is walking")
    }
}


let person1 = new User("Hari", "Ktm")
let person2 = new User('Sugam', "Lalitpur")
let person3 = new User("Paras", "Bhaktapur");

person2.walk();
person1.walk();
person3.walk();

// console.log(person3.address)
// let person1 = {
//     name: "Hari",
//     address: "KTM"
// }



// console.log(person1)
// console.log(typeof person1)
