function isLGSeven(number) {
    if (typeof number !== 'number' || number % 1 !== 0) {
        return 'Please Provide an integer positive number';
    }
    const result = number - 7;
    if (result < 7) {
        return result;
    }
    else {
        return number * 2;
    }
}

console.log(isLGSeven(15));
