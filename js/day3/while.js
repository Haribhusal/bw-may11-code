// while loop

// let a = 1;
// while (a < 10) {
//     console.log(a)
//     a++;
// }


// let b = 10;
// while (b > 0) {
//     console.log(b)
//     b--;
// }

let a = 0;
do {
    console.log(a)
    a++;
} while (a < 10)


let isLoggedIn = false;

while (!isLoggedIn) {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    if (username === "admin" && password === "1234") {
        isLoggedIn = true;
        console.log("Login successful");
    } else {
        console.log("Try again");
    }
}
