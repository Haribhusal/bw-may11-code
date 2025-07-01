let date = new Date();
let todaysDay = date.getDay();
if (todaysDay == 0) {
    console.log('Sun')
} else if (todaysDay == 1) {
    console.log("Mon")
}
else if (todaysDay == 2) {
    console.log("Tue")
}
else if (todaysDay == 3) {
    console.log("Wed")
}
else if (todaysDay == 4) {
    console.log("Thu")
}
else if (todaysDay == 5) {
    console.log("Fri")
} else {
    console.log('Sat')
}