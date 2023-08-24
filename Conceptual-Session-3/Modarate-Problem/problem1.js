function findingBadData(arr) {
    if (!Array.isArray(arr)) {
        return 'Please provide an array';
    }
    let badData = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return 'Please provide an array';
        }
        else if (arr[i] < 0) {
            badData++;
        }
    }
    return badData;
}
// const myArray = 'hello';
// const myArray = [12, 223, -23, 54, -28, -25, 34];
// const myArray = [12, 223, -23, 54, -28, 'hello', -25, 34];
console.log(findingBadData(myArray));
