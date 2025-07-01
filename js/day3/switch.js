let date = new Date();
let todaysDay = date.getDay();
switch (todaysDay) {
    case 0:
        console.log("Today is Sunday")
        break;
    case 1:
        console.log("Today is Monday")
        break;
    case 2:
        console.log("Today is Tuesday")
        break;
    case 3:
        console.log("Today is Wednesday")
        break;
    case 4:
        console.log("Today is Thrusday")
        break;
    case 5:
        console.log("Today is Friday")
        break;
    default:
        console.log("Today is Saturday")
}