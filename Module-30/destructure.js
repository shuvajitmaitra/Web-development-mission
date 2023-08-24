// Object destructuring....................
const array = {
    name: 'shuvo',
    age: 25,
    phone: '456758687909'
}

const { phone, age, name } = array;
console.log(phone);
console.log(age);
console.log(name);

const { phone: number, age: boyos, name: naam } = array;
console.log(`amr phone number is ${number}`);
console.log(`amr Boyos is ${boyos}`);
console.log(naam);

// array destructuring ..........................
const money = [10, 10, 32, 1342, 34, 12324, 1234]


const [x, y] = [10, 20]
console.log(x, y);

const [first, second, third, , five] = money;

console.log(first, second, third);

// Function destructuring ,,,,,,,,,,,,,,,,,,,,,
function doubleThem(a, b) {
    return [a * 2, b * 2];

}

const [prothom, detiyo] = doubleThem(10, 20)
console.log(prothom, detiyo);


// Swapping using destructuring

let numOne = 10;
let numTwo = 20;
console.log(numOne, numTwo);

[numOne, numTwo] = [numTwo, numOne];

console.log(numOne, numTwo);
