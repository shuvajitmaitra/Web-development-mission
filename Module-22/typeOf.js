const myString = "hello, I am shuvajit maitra";
const myAge = 24;
const nationalityBangali = true;
const friend = [13, 21, 15, 46, 76, 35, 45];
const myObject = {
    name: 'Shuvajit Maitra',
    age: 24,
    address: 'Khulna'
}
function myFunction() {
    return 0;
}

console.log(typeof (myString));
console.log(typeof (myAge));
console.log(typeof (nationalityBangali));
// console.log(typeof (friend)); //It is wrong because we cannot identify array type with normal typeOf function
console.log(Array.isArray(friend));
console.log(typeof (myObject));
console.log(typeof (myFunction));
