import adminChecker from "./function.mjs";

let user1 = {
    name: "Hari",
    role: "instructor"
}

let user2 = {
    name: "Sugam",
    role: "admin"
}
let user3 = {
    name: "Sugam",
    role: "student"
}

console.log(adminChecker(user2))

export default (user) => user.role === "admin";