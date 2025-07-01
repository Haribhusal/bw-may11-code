

function greetUser(name, myFunction) {
    const message = "Hi " + name;
    myFunction(message);
}


greetUser("Hari", function (OurMessage) {
    console.log(OurMessage);
});

