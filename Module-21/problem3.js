function average(array) {
    let sum = 0;
    for (let iterator of array) {
        sum += iterator;
    }
    const average = sum / array.length;
    return average;
}

const myArray = [2, 2, 2];
console.log("Average of these array:", average(myArray));
