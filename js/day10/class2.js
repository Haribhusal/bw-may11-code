class Person {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob
    }

    calculateAge() {
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - this.dob
    }
}

let person1 = new Person("Hari", 1995);
let person2 = new Person("sugam", 2000);
let res = person2.calculateAge();
console.log(res);