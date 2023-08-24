// // array like object
// function arguments(num1, num2) {
//     console.log(arguments);
// }

// arguments(12, 123, 25, 35, 35, 64, 32,);
function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(25, 25);
console.log(result);
console.log("123" + 123);
let a = 19
let b = 0
console.log(a + b)
console.log(1 / 0)