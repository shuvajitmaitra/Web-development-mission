const myObject = {
    name: 'shuvo',
    age: 24,
    address: 'Dhaka'

}

const objectValue = Object.values(myObject);

const objKeys = Object.keys(myObject);

const objEntries = Object.entries(myObject);

delete myObject.age;

const freeze = Object.freeze(myObject);

const seal = Object.seal(myObject);


console.log(objectValue);
console.log(objKeys);
console.log(objEntries);
console.log(myObject);
console.log(freeze);
console.log(seal);