function seriesOfSum(number){
    let sum = 0;
    for(let i = 0; i<=number; i++){
        sum +=i;
    }
    return sum;
}

let inputNumber = 10;
let seriesSum = seriesOfSum(inputNumber);
console.log('Sum of 0 to', inputNumber, 'all number summation:', seriesSum);
