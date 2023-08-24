function factorialCalculation(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result*=i;
    }
    return result;
}
let givenNumber = 10;
let factorial = factorialCalculation(givenNumber);
console.log(givenNumber, 'Factorial is:', factorial);
