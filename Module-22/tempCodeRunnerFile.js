let name = "Shuvo";
let number = 15;
let boolean = true;
let thisIsLet = "you can only reassign me, you cannot redeclare me";
thisIsLet = 'now i have new value';
const itCanNotBeChange = 'I am constant variable';

const numberOne = 10;
const numberTwo = 5;

// Use of assignment operator
const resultOne = numberOne + numberTwo;
const resultTwo = numberOne - numberTwo;
const resultThree = numberOne * numberTwo;
const resultFour = numberOne / numberTwo;
const resultFive = numberOne % numberTwo;
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
console.log(resultFour);
console.log(resultFive);


// Use of all Comparison operator
if (numberOne > numberTwo) {
    console.log('number one is greater than number two');
}
if (numberOne < numberTwo) {
    console.log('number one is less than number two');
}
if (numberOne == numberTwo) {
    console.log('We are equal');
}
if (numberOne !== numberTwo) {
    console.log('We are not equal');
}
if (numberOne >= numberTwo) {
    console.log('We are equal');
}
if (numberOne <= numberTwo) {
    console.log('We are equal');
}

// Use of &&(AND operator) and ||(OR operator) 
if (((numberOne != numberTwo) || numberOne > numberTwo) && numberOne !== numberTwo) {
    console.log('I know about && and || operator ');

}

// If else Condition
if (numberOne !== numberTwo) {
    console.log('First condition are true');

} else {
    console.log('If first condition are false then its will be run');
}


// While loop 
let i = 7
while (i <= 19) {
    console.log(i);
    i += 2
}

// Array declaration
let arr = [12, 13, 14, 15, 16, 17, 18];
console.log(arr.length);
arr[3] = 100;
const arraySum = arr[3] + arr[4];
console.log(arraySum);
arr.shift();
console.log(arr);

// For of loop // For of loop work for array and for in loop work for object

for (const i of arr) {
    console.log(i);

}


const arrNumber = [30, 80, 287, 90, 45, 100, 98, 89, 87, 78];
let newArray = [];
for (const i of arrNumber) {
    if (i >= 80) {
        newArray.push(i)
    }
}
console.log(newArray);

// Function declaration 

function multiplication(a, b, c) {
    const result = a * b * c;
    return result;
}

console.log(multiplication(2, 2, 2));



// Object declaration
const object = {
    name: 'shuvajit',
    age: 24,
    address: 'Dhaka'
}

// In three way we can change object value.
object['name'] = 'Shuvajit Maitra';
object.age = 25;
const myAddress = 'Dhaka, Bangladesh';
object.address = myAddress;


for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);

    }
}