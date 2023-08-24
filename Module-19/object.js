
//Object declaration 
const mobile = {
    brand: 'Samsung',
    ram: '4GB', 
    rom: '64GB',
    price: 18500
}

// Object call
console.log(mobile);

// Object Value change
mobile.brand = 'Nokia';


// In object add new key
var newKey = 'camera';
mobile[newKey] = '12MP';

console.log(mobile);

// how to get any Object keys value when i know specific keys name 
var property1 = mobile.ram;
console.log(property1);

// Another way to get properties value

var property2 = mobile['ram'];
console.log(property2);

// get all property name of a object

var properties = Object.keys(mobile);

console.log(properties);

// To get all values of a object
var propertyValue = Object.values(mobile);
console.log(propertyValue);


// We can set or get any property value in three way

// 1. Dot Notation; object_name.object_property_name
// 2. square Bracket; object_name[object_property_name]
// 3. Use variable; put property to a variable and put the variable to square bracket


// get property value with three method
console.log(mobile.brand);
console.log(mobile['brand']);
var propertyName = 'brand';
console.log(mobile[propertyName]);

// change property value with three method

mobile.brand = 'apple';
console.log(mobile);

mobile['brand'] = 'apple';
console.log(mobile);

var propertyName = 'brand';
mobile[propertyName] = 'apple';
console.log(mobile);
