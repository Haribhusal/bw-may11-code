let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 5000);
});

myPromise.then(function (value) {
    console.log(value)
}).catch(function (err) { console.log(err) });

console.log("Hello I am logging first")