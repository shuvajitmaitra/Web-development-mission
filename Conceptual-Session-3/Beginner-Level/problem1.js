// Take a integer number if its positive number return true, else return false
function isInteger(number) {
    if (typeof number !== 'number') {
        console.log('please provide a number');

        return 'please provide a number';
    }
    if (number % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isInteger(2));
