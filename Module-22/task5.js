function isPositive(arr) {
    let newArr = [];
    for (let element of arr) {
        if (element >= 0) {
            newArr.push(element);
        }
        else {
            break;
        }
    }
    return newArr;
}


const myArray = [1, 2, 3, 4, 5, 6, -7, 8];
console.log(isPositive(myArray));
