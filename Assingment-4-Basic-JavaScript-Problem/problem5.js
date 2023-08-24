function canPay(changeArray, totalDue) {
    if (changeArray.length === 0 || !Array.isArray(changeArray)) {
        return 'Please provide an array that contains elements of the number type.';
    }
    for (const element of changeArray) {
        if (typeof element !== 'number') {
            return "Array element should be number"
        }
    }
    if (typeof totalDue !== 'number') {
        return "Please provide a number"
    }
    let sum = 0;
    for (const element of changeArray) {
        sum += element
    }
    if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}
const myArray = [1, 5, "hwlll"];
const due = 10;
console.log(canPay(myArray, due));