function Factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result*=i;
    }
    return result;
}

let givenNumber = 10;
let factorialCalculation = Factorial(givenNumber); 
console.log(givenNumber, 'factorial is:', factorialCalculation);
