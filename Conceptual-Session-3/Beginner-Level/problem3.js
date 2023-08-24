function mindGame(number) {
    if (typeof number !== 'number' || number <= 0) {
        return 'Please, Provide a positive number';
    }
    else {
        return (((number * 3) + 10) / 2) - 5;
    }
}

console.log(mindGame(5));
