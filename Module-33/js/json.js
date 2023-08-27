const obj = {
    name: 'Shuvo',
    id: 1,
    address: "Dhaka Bangladesh",
    accessories: [{ item1: 'Phone', item2: 'watch', item3: 'glasses' }]
}

// JSON 
console.log(obj);
const jsonString = JSON.stringify(obj);
console.log(jsonString.name);
// const jsonParse = JSON.parse(jsonString);
// console.log(jsonParse);
