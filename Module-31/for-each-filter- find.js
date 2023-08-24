const array = [10, 12, 13, 14, 15, 16];
const newArray = array.forEach(n => console.log(n));
const newArrayTwo = array.filter(n => n > 14);
console.log(newArrayTwo);

const newArrayThree = array.find(n => n % 2 !== 0)

console.log(newArrayThree);