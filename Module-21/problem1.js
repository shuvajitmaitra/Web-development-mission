const array = [12, 145, 45, 6343, 423456, 24365, 809];

let biggestNumber = array[0];

for (let iterator of array) {
    if (iterator >= biggestNumber) {
        biggestNumber = iterator;
    }
}

console.log('Biggest number is:', biggestNumber);
