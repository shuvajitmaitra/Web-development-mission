
const arrow = (array) => {
    sum = 0;
    square = 0;

    for (let element of array) {
        square += (element * element);

        average = square / array.length;
    }

    return average;
}

const arr = [2, 2, 2];
console.log(arrow(arr));