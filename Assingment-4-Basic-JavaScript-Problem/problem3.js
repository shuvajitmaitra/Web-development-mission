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

const myArr = [1, 2]
console.log(sortMaker(myArr));