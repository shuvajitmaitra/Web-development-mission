let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Old array is: ', myArray);

function oddNumber(number) {
    let listOfOddNumbers = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            listOfOddNumbers.push(number[i]);
        }
    }
    return listOfOddNumbers;
}

let newArray = oddNumber(myArray);
console.log('New array is:', newArray);

function sumOfArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}
let arraySum = sumOfArray(newArray);
console.log('Array sum is:', arraySum);
