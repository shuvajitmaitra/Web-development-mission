var shuvo = 10;

// Mainly variable are two types
// 1. Primitive
        // Numeric
        // string 
        // Boolean
        // Undefine
        // Null
// 2. Non-primitive
        // object
        // array
        // Function

// Naming convention of variable:
        // 1. only string and underscore can start of the variable name
        // 2. symbol cannot be in variable name
        // 3. Variable are case sensitive (Var, var, VAR and vAr are considered as different name)

var array = ['this', 'is', 'a', 'sunny', 'day'];
var length = array.length;
console.log(length);

var arrayIndex = array[2];
console.log(arrayIndex);
array[3] = 'rainy';
var arrayElementChange = array[3];
console.log(arrayElementChange);


console.log(array.indexOf('day'));