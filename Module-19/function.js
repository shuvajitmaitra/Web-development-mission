//Function Section: 

//Normal function structure
function myFunction(){ 
    console.log('Hello, Everyone');
    console.log('I am shuvo');
    console.log('I want to be a frontend developer');
}

//function structure with parameter

function myFunction2(serial1, serial2, serial3){   
    console.log(serial1 + ' Hello, Everyone');
    console.log(serial2 + ' I am shuvo');
    console.log(serial3 + ' I want to be a frontend developer');   
    
}
// Summation Function
function sum(a, b, c, d, e){
    var sum = a + b + c + d + e;
    console.log('All value summation result is: ' + sum)
}
// Call section: 
console.log('Normal Function structure:');

myFunction();


console.log('Function Structure with parameter:');

myFunction2(1, 2, 3);

sum(10, 10, 10, 10, 10);