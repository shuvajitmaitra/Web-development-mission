function factorial(number){
    let i =number, result = 1;
    while(i >= 1 ){
        result *= i;
        i--; 
    }
    return result;
}

let givenNumber = 10;
let returnResult = factorial(givenNumber);
console.log(givenNumber, 'Factorial is: ', returnResult);
