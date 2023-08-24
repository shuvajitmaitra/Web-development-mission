function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a number";
    }

    const result = number * number * number;
    return result;
}



function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please make sure both of two are string"
    }

    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}



function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0 || arr.length !== 2) {
        return "Invalid Input"
    }
    if (arr[0] < arr[1]) {
        let container = arr[0];
        arr[0] = arr[1];
        arr[1] = container;
        return arr;
    }
    else if (arr[0] == arr[1]) {
        return 'equal';
    }
    else {
        return arr;
    }
}



function findAddress(obj) {

    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    return street + "," + house + "," + society;

}


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