function printDetails(obj) {
    if (typeof obj !== 'object') {
        return 'Give me an object';
    }
    else {


        return 'amar naam ' + obj.name + ' amar boyos ' + obj.age + ' amar basa ' + obj.address + ' amar height ' + obj.height;
    }
}

const myObject = {
    name: "Shuvo",
    age: 24,
    address: "Dhaka",
    height: 1.6
}

console.log(printDetails(myObject));
printDetails(myObject);
