

let person = {
    name: "Hari",
    age: 23,
    address: {
        city: "Kathmandu",
        wardNo: 10,
    },
    isGraduated: true,
    play: function () {
        console.log(this.name + ' is playing')
    }
}

// console.log(person.name, person.isGraduated)

let { name, isGraduated } = person;

// // console.log(name, isGraduated)
// if (person.isGraduated) {
//     console.log("Hari is graduated")
// }