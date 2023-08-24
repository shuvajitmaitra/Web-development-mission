const shoppingCarts = {
    mobile: 3,
    shirt: 4,
    books: 20,
    glasses: '2pice',
    watch: '4pice',
    fan: 4
}

let keys = Object.keys(shoppingCarts);
console.log(keys);

for(var i = 0; i < keys.length; i++){
    console.log(keys[i]);
} 


// To get any Object properties and value using for loop


// Normal for loop
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCarts[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop

for(var propertyName in shoppingCarts){
    var value = shoppingCarts[propertyName];
    console.log(propertyName, value);
}